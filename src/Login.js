import React, { useState } from 'react'
import "./Login.css"
import loginImage from "./amazon__logo.png"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase';


function Login() {
    const history =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src={loginImage} alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                     
                    <h5>Password</h5>
                    <input required type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign in</button>
                </form>

                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Tenetur maiores excepturi delectus 
                    alias animi neque. Maxime ratione mollitia doloremque totam, 
                    est rerum incidunt omnis sapiente obcaecati error tempore non 
                    culpa.
                </p>

                <button onClick={register} className='login__regiterButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
