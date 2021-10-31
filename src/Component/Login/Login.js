import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    
    return (
        <div>
            this is Login
            <button onClick={handleGoogleLogin}>google login</button>
        </div>
    );
};

export default Login;