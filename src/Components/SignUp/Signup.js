import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h2>Please Create A Account </h2>
            <form action="">
                <input type="email" /> <br />
                <input type="password" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login" style={{textDecoration:'none'}}>Already have an account ?</Link>
        </div>
    );
};

export default Signup;