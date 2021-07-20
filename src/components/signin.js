import React, {useState, useEffect} from 'react';
import Img1 from './images/img2.svg';
import './styles.css';
import {auth} from '../firebase/firebase';
import { Link } from 'react-router-dom';
const Signin = () =>
{
    const [status, setStatus] = useState('login');
    const [email ,setEmail] = useState('');
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
    const login = (e) =>
    {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user.uid;
            // ...
            console.log(user);

            setUid(user);
        })
        .catch((error) => {
            if (
                error.code === "auth/invalid-email" ||
                error.code === "auth/user-not-found"
              ) {
                window.alert("User not found");
              } else if (error.code === "auth/wrong-password") {
                window.alert("Wrong password");
              }
        });
    }
    const checkStatus = () =>
    {
        if(status === 'login')
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
                            <Link to= '/signup'><a href="#" class="plan-duration__text " style = {{textDecoration:"none", color: 'white', size: '1.2rem'}} >Sign Up</a></Link>
                            <div class="plan-duration__toggle">
                                <div class="plan-duration__toggle-ball"></div>
                            </div>
                            <a href="#" class="plan-duration__text plan-duration--active" style = {{textDecoration:"none", color: 'white', size: '1.2rem', fontWeight:'bolder'}} >Sign In</a>
                        </div>
                        <div class = 'row'>
                            <div class = 'col-lg-6 col-md-12'>
                                <img src = {Img1} className = 'rightImg'/>
                            </div>
                            <div class = 'col-lg-6 col-md-12'>
                                <div style={{paddingTop:'5%'}}></div>
                                <main class="form-signin">
                                    <form onChange = {onChangeInput}>
                                        <h1 class="h3 mb-3 fw-normal" style = {{color: 'white'}}>Welcome back to InstaDoc!!</h1>

                                        <div class="form-floating">
                                            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating">
                                            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <button class="btn1" type="submit" onClick = {login}>Sign In</button>
                                    </form>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return checkStatus();
}   
export default Signin;