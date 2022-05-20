import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../../../Hooks/useToken';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword, user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (error) {
        toast(error?.message);
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className="container">
            <PageTitle title="Login"></PageTitle>
            <h2 className="text-center text-info text-decoration-underline mt-3">Login</h2>
            <Form onSubmit={handleLogin} className="w-75 mx-auto border p-3 mt-3">
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="text-info fs-5">Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required />
                </Form.Group>
                {/* {error && <p className="text-danger">{error.message}</p>} */}
                <button className="btn btn-info text-white mt-2">Login</button>
            </Form>
            <p className="text-center text-info mt-2">Forget Password? <button onClick={resetPassword} className='border-0 text-primary text-decoration-underline'>Reset Password</button> </p>
            <p className="text-center text-info mt-3">Don't have an Account? <Link to="/signup" >Register Here</Link></p>
            <div className="d-flex justify-content-center mb-3">
                <hr className="w-25 mx-2" /> <small className="text-info mt-1">or</small> <hr className="w-25 mx-2" />
            </div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;