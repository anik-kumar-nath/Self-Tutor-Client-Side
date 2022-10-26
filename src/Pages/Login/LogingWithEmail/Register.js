import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../Context/AuthContextProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const UserPhotoURL = form.UserPhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, UserPhotoURL, email, password);
        createUser(email, password)
            .then(result => {
                form.reset();
                handleUpdateProfile(name, UserPhotoURL);
            })
            .catch(e => {
                console.error(e);
            });
    }


    return (
        <div className='container'>
            <h1 className='text-center text-success mb-3 fw-bolder'>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='UserPhotoURL' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;