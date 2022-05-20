import React from 'react';
import { Form } from 'react-bootstrap';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (error) {
        toast(error?.message);
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

    }

    return (
        <div className="container">
            <h2 className="text-center text-info text-decoration-underline mt-3">Login</h2>
            <Form onSubmit={handleLogin} className="w-75 mx-auto border p-3 mt-3">
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Email</Form.Label>
                    <Form.Control name="email" type="email" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Password</Form.Label>
                    <Form.Control name="password" type="password" required />
                </Form.Group>
                {/* {error && <p className="text-danger">{error.message}</p>} */}
                <button className="btn btn-info text-white mt-2">Login</button>
            </Form>
            <p className="text-center text-info mt-3">Don't have an Account? <Link to="/signup" >Register Here</Link></p>
            <div className="d-flex justify-content-center mb-3">
                <hr className="w-25 mx-2" /> <small className="text-info mt-1">or</small> <hr className="w-25 mx-2" />
            </div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;