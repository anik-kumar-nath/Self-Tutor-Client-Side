import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, details, image } = courseDetails;

    return (
        <div className="container">
            <Card className='text-success'>
                <Card.Img variant="top" src={image} width="100"
                    height="300" style={{ 'alignContent': 'center' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary">All news in this category</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;