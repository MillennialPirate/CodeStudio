import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './styles.css';
import CodeEditor from './CodeEditor';
import CodeEditorBuild from './CodeEditorBuild';
const Profile = ({uid, name}) => {
    const [status, setStatus] = useState('profile');
    const [pens, setPens] = useState([]);
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [id, setId] = useState('');
    const [topic, setTopic] = useState('');
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
            var x = status;
            console.log(x);
            if(x === 'profile')
            {
                for(var i = 0; i < res.data.length; i++)
                {
                    pens.push(res.data[i]);
                }
                console.log(pens);
                setStatus('loaded');
            }
        })

    })
    const openEditor = (e, html, css, js, id, topic) => {
        e.preventDefault();
        setHtml(html);
        setCss(css);
        setJs(js);
        setId(id);
        setTopic(topic)
        setStatus('editor');
    }
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
                                <p style = {{fontSize:'1.5rem', color: 'white'}}>Here are the pens that you have coded till now  </p>
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
                                <p style = {{fontSize:'1.5rem', color: 'white'}}>Here are the pens that you have coded till now</p>
                            </div>
                            <div class = 'container' style = {{textAlign:"center", color:'white'}}>
                                {
                                    pens.length === 0 ? <div></div>: pens.map((pen) => {
                                        return (
                                        <div className = 'container'>
                                            <div className = 'row'>
                                                <div className = 'col-lg-12'>
                                                    <div class="main-container">
                                                        <div class="card-container">
                                                            <div class="card card-1">
                                                                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                                                                <p class="card__exit"><i class="fas fa-times"></i></p>
                                                                <h2 class="card__title">{pen.topic}</h2>
                                                                <p class="card__apply"><a href="#" onClick = {(e) => {openEditor(e, pen.html, pen.css, pen.js, pen._id, pen.topic)}}>Open <i class="fas fa-arrow-right"></i></a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    )})
                                }
                                <button class = 'btn1' onClick = {() => {setStatus('editor1')}}>Create new pen</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(status === 'editor')
        {
            return <CodeEditor html1 = {html} css1 = {css} js1 = {js} id1 = {id} uid1 = {uid} topic1 = {topic} name = {name}/>
        }
        if(status === 'editor1')
        {
            return <CodeEditorBuild uid1 = {uid} name = {name}/>
        }
    }
    return checkStatus();
}
export default Profile;