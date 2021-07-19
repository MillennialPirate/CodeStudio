import React from 'react';
import Img1 from './images/programmer.svg';
import './styles.css';
class Signup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            status : "signup"
        };
    }
    checkStatus()
    {
        if(this.state.status === 'signup')
        {
            return (
                <div>
                    <div class = 'container'>
                        <div class = 'heading'>
                            <h1>CodeStudio</h1>
                        </div>
                    </div>
                    <div class = 'container'>
                        <div class = 'row'>
                            <div class = 'col-lg-6 col-md-12'>
                                
                            </div>
                            <div class = 'col-lg-6 col-md-12'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render()
    {
        return this.checkStatus();
    }
}
export default Signup;