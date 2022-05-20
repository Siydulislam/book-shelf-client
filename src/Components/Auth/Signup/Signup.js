import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import auth from '../firebase.init';
import GoogleLogin from '../SocialLogin/GoogleLogin';

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    if (error) {
        toast(error?.message);
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return navigate(from, { replace: true });
    }

    const handleRegister = async event => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="container">
            <h2 className="text-center text-info text-decoration-underline mt-3">Register</h2>
            <Form onSubmit={handleRegister} className="w-75 mx-auto border p-3 mt-3">
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">User Name</Form.Label>
                    <Form.Control name="name" type="name" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Email</Form.Label>
                    <Form.Control name="email" type="email" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Password</Form.Label>
                    <Form.Control name="password" type="password" required />
                </Form.Group>
                {/* {error && <p className="text-danger">{error.message}</p>} */}
                <button className="btn btn-info text-white mt-2">Register</button>
            </Form>
            <p className="text-center text-info mt-3">Already have an Account? <Link to="/login" >Login Here</Link></p>
            <div className="d-flex justify-content-center mb-3">
                <hr className="w-25 mx-2" /> <small className="text-info mt-1">or</small> <hr className="w-25 mx-2" />
            </div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Signup;