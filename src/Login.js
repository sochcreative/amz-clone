import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
            const history = useHistory();
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');

            const signIn = e => {
                e.preventDefault()

                auth
                .signInWithEmailAndPassword(email,password)
                .then(auth => {
                    history.push('/')
                })
                .catch(error => alert(error.message))


            }
            const register = e => {
                e.preventDefault()

                auth
                .createUserWithEmailAndPassword(email,password)
                .then((auth) => {
                        if(auth){
                            history.push('/')
                        }
                })
                .catch(error => alert(error.message))
            }

    return (
    
        <div className="login">
            <Link to="/">
            <img src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
             className="loginLogo" alt="" />
            </Link>

            <div className="loginContainer">
                <h1>Sign In</h1>
                <form>
                    <h5>User or Email id </h5>
                    <input type="text" name="user" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password </h5>
                    <input type="password" name="user" value={password} onChange={e => setPassword(e.target.value)} /> 

                    <button className="loginSigninButton" type="submit" onClick={signIn} >Sign In </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button className="loginRegisterButton" onClick={register}>
                Create Your Account
                </button>
            </div>
        </div>
    );
}

export default Login;
