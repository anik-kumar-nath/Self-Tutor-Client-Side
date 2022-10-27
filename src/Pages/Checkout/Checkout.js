import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Checkout = () => {
    const { checkout } = useContext(AuthContext);
    console.log(checkout);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-8 col-ld-6 mx-auto">
                        <Card className='text-success'>
                            <Card.Header as="h2">Check Out</Card.Header>
                            <Card.Body>
                                <Card.Title>{checkout.title}</Card.Title>
                                <Card.Text>
                                    Course ID: {checkout._id}
                                </Card.Text>
                                <Link to='/' className='btn btn-primary'>Go Course Page</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;