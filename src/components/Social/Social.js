import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/social/google.png';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='my-2'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark mx-auto my-3 w-50 d-block'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;