import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, details, image } = courseDetails;
    const options = {
        orientation: 'landscape',
        unit: 'in',
    };
    const ref = React.createRef();

    return (
        <div className="container my-3" style={{ "maxWidth": "900px" }} >
            <div className='d-flex justify-content-end p-2'>
                <ReactToPdf targetRef={ref} filename='CourseDocument.pdf' options={options} >
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </ReactToPdf>
            </div>
            <div ref={ref} className="mx-auto">
                <h2 className='text-success'>{title}</h2>
                <img src={image} alt="" className='w-100' height="300" style={{ 'alignContent': 'center' }} />
                <p className='text-success'> {details}</p>
                <Button variant="primary">Get Premium Access</Button>
            </div>
        </div>
    );
};
export default CourseDetails;