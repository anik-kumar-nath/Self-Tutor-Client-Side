import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-success mb-3 fw-bolder'>Login</h1>
            <div className='row d-flex justify-content-center'>
                <div className="col-10 col-md-6 ">
                    <ButtonGroup vertical className='mx-auto w-100 gap-3 '>
                        <Form className='w-100' onSubmit={handleSubmit}>
                            <Form.Group className="mb-1 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-1 w-100" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='w-100'>
                                Submit
                            </Button>
                        </Form>
                        <p>No account yet? <Link to={'/register'}>Register Now</Link> </p>
                        <hr className='border border-danger border-2 opacity-50 w-100' />
                        <Button onClick={() => providerLogin(GoogleProvider)}>Login with Google</Button>
                        <Button onClick={() => providerLogin(GithubProvider)}>Login with Github</Button>
                    </ButtonGroup>
                </div>

            </div>
        </div>
    );
};

export default Login;