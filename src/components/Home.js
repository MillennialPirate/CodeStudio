import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Img1 from './images/programmer.svg';
import './styles.css';
const Home = () => 
{
    const [status, setStatus] = useState('home');
    const checkStatus = () =>
    {
        if(status === 'home')
        {
            return (
                <div>
                    <div className = 'container'>
                        <div className = 'heading'>
                            <h1>CodeStudio</h1>
                        </div>
                        <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-lg-6 col-md-12 left'>
                                    <h2>Welcome to CodeStudio</h2>
                                    <h4>Goodbye to all frontend debugging issues!</h4>
                                    <p style = {{fontSize: '1.2rem'}}>CodeStudio is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
                                    <Link to = '/signup'><button className = 'btn1'>Sign Up</button></Link>
                                </div>
                                <div className = 'col-lg-6 col-md-12 right'>
                                    <img src = {Img1} className = 'rightImg'/>
                                </div>   
                            </div>
                        </div>
                        <div className = 'container'>
                            <div className = 'heading'>
                                <h2>Features we offer!</h2>
                            </div>
                            <div className="feat bg-gray pt-5 pb-5">
                                <div className="container" style={{ textAlign: "center" }}>
                                    <div className="row">

                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="item">
                                                <span className="icon feature_box_col_one ">
                                                </span>
                                                <h4 style={{ color: 'white' }}>Build and test</h4>
                                                <p>Get work done quicker by building out entire projects or isolating code to test features and animations.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="item">
                                                <span className="icon feature_box_col_two">
                                                </span>
                                                <h4 style={{ color: 'white' }}>Save your work!</h4>
                                                <p>Don't lose your progress and motivation. Always save your work so that you can get back to it ASAP</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="item">
                                                <span className="icon feature_box_col_three">
                                                </span>
                                                <h4 style={{ color: 'white' }}>Dynamic</h4>
                                                <p>Dynamic editors along with hot reload, so that none of your time goes to waste! Start designing and coding today!</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return checkStatus();
}
export default Home;