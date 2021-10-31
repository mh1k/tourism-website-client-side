import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found d-flex justify-content-center align-items-center">

            <div className="text-center">
                <h1>404 !</h1>
                <h3>This Page Not Found</h3>
                <p>Back to home page</p>
                <Link className="homeBtn" to='/home'>Go Home</Link>
            </div>



        </div>
    );
};

export default NotFound;