import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import { AuthContext } from '../../../Context/AuthContextProvider';

const CourseDetails = () => {
    const { setCheckout } = useContext(AuthContext);
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
                <p className='text-success fw-bolder'> {details}</p>
                <Link to={'/checkout'} className='btn btn-primary' onClick={() => setCheckout(courseDetails)}>Get Premium Access</Link>
            </div>
        </div>
    );
};
export default CourseDetails;