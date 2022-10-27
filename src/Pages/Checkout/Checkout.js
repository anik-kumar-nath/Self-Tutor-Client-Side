import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Checkout = () => {
    const { checkout } = useContext(AuthContext);
    console.log(checkout);
    return (
        <div>
            <h1> This is checkout page {checkout.title}</h1>
            <Card className='text-success'>
                <Card.Header as="h5">Check Out</Card.Header>
                <Card.Body>
                    <Card.Title>{checkout.title}</Card.Title>
                    <Card.Text>
                        course ID: {checkout._id}
                    </Card.Text>
                    <Link to='/' className='btn btn-primary'>Go Course Page</Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Checkout;