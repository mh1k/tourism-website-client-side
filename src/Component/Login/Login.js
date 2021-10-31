import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <Container className="d-flex justify-content-center mt-5">
                <div className="login-container shadow-lg d-flex justify-content-center flex-column text-center p-5 ">
                    <p className="mb-4 login-title">Log in to your accounts</p>
                    <img className="login-img align-self-center mb-3 text-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <h4 className="mb-4">Sign With Google</h4>

                    <button className="btn  btn-primary" onClick={handleGoogleLogin}><span>{googleIcon}</span> continue with google</button>
                </div>
            </Container>
        </div>
    );
};

export default Login;