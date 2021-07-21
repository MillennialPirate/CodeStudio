import React, {useState, useEffect} from 'react';
import Img1 from './images/img1.svg';
import './styles.css';
import {auth} from '../firebase/firebase';
import { Link } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import Profile from './profile';

const Signup = () =>
{
    const [status, setStatus] = useState('register');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('');
    const onChangeInput = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'email')
        {
            setEmail(value);
        }
        else 
        {
            setPassword(value);
        }
    }
    const register = (e) =>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user.user.uid);
            setUid(user.user.uid);
            var name   = email.substring(0, email.lastIndexOf("@"));
            setName(name);
            setStatus('editor');
        })
        .catch((err) => {
            console.log(err);
            switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                ;
                window.alert("Try again : " + err.message);
                break;
            case "auth/weak-password":
                window.alert("Weak password");
                break;
            default: console.log("Hello");
            }
        });
    }
    const checkStatus = () =>
    {
        if(status === 'register')
        {
            return (
                <div>
                    <div class = 'container'>
                        <div class = 'heading'>
                            <h1>CodeStudio</h1>
                        </div>
                    </div>
                    <div class = 'container'>
                        <div style = {{paddingTop:'2%'}}></div>
                        <div class="plan-duration">
                            <a href="#" class="plan-duration__text " style = {{textDecoration:"none", color: 'white', size: '1.2rem'}} >Sign Up</a>
                            <div class="plan-duration__toggle">
                                <div class="plan-duration__toggle-ball"></div>
                            </div>
                            <Link to= '/signin'><a href="#" class="plan-duration__text plan-duration--active" style = {{textDecoration:"none", color: 'white', size: '1.2rem', fontWeight:'bolder'}} >Sign In</a></Link>
                        </div>
                        <div class = 'row'>
                            <div class = 'col-lg-6 col-md-12'>
                                <img src = {Img1} className = 'rightImg'/>
                            </div>
                            <div class = 'col-lg-6 col-md-12'>
                                <div style={{paddingTop:'5%'}}></div>
                                <main class="form-signin">
                                    <form onChange = {onChangeInput}>
                                        <h1 class="h3 mb-3 fw-normal" style = {{color: 'white'}}>Welcome to InstaDoc!!</h1>

                                        <div class="form-floating">
                                            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating">
                                            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <button class="btn1" type="submit" onClick = {register}>Sign Up</button>
                                    </form>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(status === 'editor')
        {
            return <Profile uid = {uid} name = {name}/>
        }
    }
    return checkStatus();
}   
export default Signup;