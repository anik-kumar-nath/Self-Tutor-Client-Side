import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ news }) => {
    const { _id, title, details, image } = news;
    return (
        <div className='text-success'>
            <Card className="mb-5">
                <Card.Img variant="top" src={image} width="100"
                    height="100" style={{ 'alignContent': 'center' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {
                        details.length > 110 ?
                            <small>{details.slice(0, 100) + '...'}</small>
                            :
                            <small>{details}</small>
                    }
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Link to={`course/${_id}`} className='text-light btn btn-primary w-100'>Get Course</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCard;