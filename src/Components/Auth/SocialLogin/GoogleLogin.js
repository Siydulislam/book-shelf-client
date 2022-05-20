import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/useToken';

const GoogleLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (token) {
        return navigate(from, { replace: true });
    }

    return (
        <div>
            {error && <p className="text-danger">{error.message}</p>}
            <button onClick={() => signInWithGoogle()} className="btn btn-info w-50 mx-auto d-flex justify-content-center align-items-center">
                <BsGoogle className="text-white"></BsGoogle>
                <p className="mt-3 mx-3 text-white"> Continue with Google </p>
            </button>
        </div>
    );
};

export default GoogleLogin;