import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth} from "../firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
        navigate('/');
        }).catch(e => alert(e.message));
   }

    const signup = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            navigate('/');
        }).catch(e => alert(e.message));
    }

    return (
        <div className="login">
        <Link to='/' >
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" className="login__logo"/>
        </Link>

        <div className="login__container" >
            <h1>Sign in</h1>
            <form>
            <h5>E-mail</h5>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={logIn} className="login__signInButton">Sign In</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of Use and Sales. Please see out Privacy Notice, our Cookies Notice and our interest-Based Ads Notice
            </p>
            <button type="submit" onClick={signup} className="login__registerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login;