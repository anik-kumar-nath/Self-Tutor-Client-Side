import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../Context/AuthContextProvider';


const CourseCategory = () => {
    const { setcategory } = useContext(AuthContext);
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-edu-data-aknathweb.vercel.app/courses')
            .then(response => response.json())
            .then(result => setcourses(result))
    }, []);

    return (
        <div>
            <strong>Category</strong>
            {
                courses.map((data, index) => <Button key={index} className='w-100 my-1 fw-bold  p-3' onClick={() => setcategory(data._id)}>{data.title}</Button>)
            }
        </div>
    );
};

export default CourseCategory;