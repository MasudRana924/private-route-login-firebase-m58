import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/usefirebase';

const Login = () => {
    // const {googleSignIn}=useFirebase()
    const {googleSignIn}=useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={googleSignIn}>Google Sign In</button>
            <br />
            <Link to="/signup">New user ?</Link>
        </div>
    );
};

export default Login;