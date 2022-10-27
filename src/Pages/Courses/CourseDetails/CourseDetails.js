import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, details, image } = courseDetails;

    return (
        <div className="container my-3">
            <div className='d-flex justify-content-end p-2'>
                <button >Download PDF</button>
            </div>
            <h2 className='text-success'>{title}</h2>
            <img src={image} alt="" className='w-100' height="300" style={{ 'alignContent': 'center' }} />
            <p> {details}</p>
            <Button variant="primary">Get Premium Access</Button>
        </div>
    );
};

export default CourseDetails;