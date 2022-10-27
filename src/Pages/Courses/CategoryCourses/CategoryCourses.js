import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContextProvider';
import CourseCard from './CourseCard';

const CategoryCourses = ({ CourseData }) => {
    const { category } = useContext(AuthContext);
    const [CategoryCourses, setCategoryCourses] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-edu-data-aknathweb.vercel.app/course/${category || "01"}`)
            .then(response => response.json())
            .then(result => setCategoryCourses(result.data))
    }, [category])

    console.log('loadCoursesCategory', CategoryCourses)
    return (
        <div className='text-success'>
            <div className="container">
                <div className="row d-flex">
                    {
                        CourseData.map(news =>
                            <div className="col-12 col-md-6">
                                <CourseCard key={news._id}
                                    news={news}></CourseCard>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryCourses;