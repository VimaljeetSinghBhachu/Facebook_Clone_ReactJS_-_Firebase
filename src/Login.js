import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in ... 
        auth.signInWithPopup(provider)
        .then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });

        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="logo_text">
                <div className="login_image">
                    <img
                        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                        alt=""
                        height="115px"
                    />
                </div>
                <div className="login_text">
                    <h1>Facebook helps you connect and share with the people in your life.</h1>
                </div>
            </div>
            <div className="signin_button">
                <Button 
                    type="Submit" 
                    onClick={signIn}>
                Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login;
