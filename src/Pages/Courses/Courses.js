import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import CourseCard from './CategoryCourses/CourseCard';

const Courses = () => {
    const { setcategory } = useContext(AuthContext);
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-edu-data-aknathweb.vercel.app/courses')
            .then(response => response.json())
            .then(result => setcourses(result))
    }, []);
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-5 col-md-4 col-lg-3 ">
                    <div>
                        <strong>Category</strong>
                        {
                            courses.map((data, index) => <Link to={`course/${data._id}`}><Button key={index} className='w-100 my-1 fw-bold  p-3' onClick={() => setcategory(data._id)}>{data.title}</Button></Link>)
                        }
                    </div>
                </div>
                <div className="col-7 col-md-8 col-lg-9">
                    <h1 className='text-center text-success'>Courses</h1>
                    <div className='text-success'>
                        <div className="container">
                            <div className="row d-flex">
                                {
                                    courses.map(news =>
                                        <div className="col-12 col-md-6">
                                            <CourseCard key={news._id}
                                                news={news}></CourseCard>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;