import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './styles.css';
const Profile = ({uid, name}) => {
    const [status, setStatus] = useState('profile');
    const [pens, setPens] = useState([]);
    useEffect(() => {
        console.log(uid);
        const data = {
            uid : uid
        };
        axios.post('http://localhost:5000/pens/getPenByUser', data)
        .then(res => {
            console.log(res.data);
            if(res.data === 'Error')
            {
                window.alert('Oops!! Something has gone wrong, please try again after some time');
                return;
            }
            setPens(res.data);
            setStatus('loaded');
        })
    })
    const checkStatus = () => {
        if(status === 'profile')
        {
            return (
                <div>
                    <div className = 'container'>
                        <div className = 'heading'>
                            <h1>CodeStudio</h1>
                        </div>
                        <div style={{paddingTop:'2%'}}></div>
                        <div className = 'container'>
                            <div style = {{textAlign:"center"}}>
                                <h3 style = {{color: 'white'}}>Welcome {name}, Ready, Set, Code!!</h3>
                            </div>
                        </div>
                        <div className = 'container'>
                            <div style = {{textAlign:'center'}}>
                                <p style = {{fontSize:'1.5rem', color: 'white'}}>Here are the pens that you have coded till now -> </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(status === 'loaded')
        {
            return (
                <div>
                    <div className = 'container'>
                        <div className = 'heading'>
                            <h1>CodeStudio</h1>
                        </div>
                        <div style={{paddingTop:'2%'}}></div>
                        <div className = 'container'>
                            <div style = {{textAlign:"center"}}>
                                <h3 style = {{color: 'white'}}>Welcome {name}, Ready, Set, Code!!</h3>
                            </div>
                        </div>
                        <div className = 'container'>
                            <div style = {{textAlign:'center'}}>
                                <p style = {{fontSize:'1.5rem', color: 'white'}}>Here are the pens that you have coded till now -> </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
    return checkStatus();
}
export default Profile;