import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/usefirebase';
import './Header.css'

const Header = () => {
    // const{user,logOut}=useFirebase()
    const{user,logOut}=useAuth()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
            <small>{user.displayName}</small>
            {user.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;