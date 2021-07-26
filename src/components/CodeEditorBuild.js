import React, { useState, useEffect, useLayoutEffect } from 'react';
import './styles.css';

import Editor from './editor';
import axios from 'axios';
import Profile from './profile';
const Code = ({uid1, name}) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [id, setId] = useState('');
    const [uid, setUid] = useState(uid1);
    const [topic, setTopic] = useState('');
    const [status, setStatus] = useState('all');
    useEffect(() => {
        console.log(uid + ' ' + topic);
    })
    const sourceDoc = `<html><style>${css}</style><body>${html}</body><script>${js}</script></html>`; // it has to be rendered
    //to display the html editor
    const changeToHtml = () => {
        setStatus("html");
    }
    //to change to css editor
    const changeToCss = () => {
        setStatus("css");
    }
    //to change to JS editor
    const changeToJs = () => {
        setStatus("js");
    }
    //to change the view to all three together
    const changeToAll = () => {
        setStatus('all');
    }
    const save = () => {
        var data = {
            topic: topic, 
            html : html, 
            css : css, 
            js: js,
            uid: uid
        };
        console.log(data);
        axios.post('http://localhost:5000/pens/addPen', data)
        .then(res => {
            console.log(res.data);
            setStatus('back');
        })
    }
    const onTitleChange = (e) => {
        setTopic(e.target.value);
    }
    const checkStatus = (status) => {
        if (status === "html") {
            return (
                <div style={{ color: 'white' }}>
                    <div className='container'>
                        <div className='headingSec'>
                            <h1>{'{CodeStudio}'}</h1>
                        </div>
                    </div>
                    <div className='container'>
                        <div class = 'inputDiv'>
                            <input type = 'text' name = 'title' onChange = {onTitleChange}/>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                            <h4>File Explorer</h4>
                                <ul>
                                <li><a href="#html" onClick={changeToHtml}>index.html</a></li>
                                    <li><a href="#css" onClick={changeToCss}>index.css</a></li>
                                    <li><a href="#js" onClick={changeToJs}>index.js</a></li>
                                </ul>
                                <h4><a href="#all" onClick={changeToAll}>View all</a></h4>
                                <button onClick = {() => {setStatus('back')}} className = 'btn1'>Back</button>
                            </div>
                            <div className='col-lg-9'>
                                <Editor name='index.html' lang='xml' value={html} onChange={setHtml} />
                                <div style={{ paddingTop: '2%' }}></div>
                                <div className='container'>
                                    <h4>Output:</h4>
                                    <iframe
                                        srcDoc={sourceDoc}
                                        title='output'
                                        sandbox='allow-scripts'
                                        frameBorder='0'
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div style = {{textAlign:"center"}}><button className = 'btn1' onClick = {save}>Save</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (status === "css") {
            return (
                <div style={{ color: 'white' }}>
                    <div className='container'>
                        <div className='headingSec'>
                            <h1>{'{CodeStudio}'}</h1>
                        </div>
                    </div>
                    <div className='container'>
                    <div class = 'inputDiv'>
                            <input type = 'text' name = 'title' onChange = {onTitleChange}/>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h4>File Explorer</h4>
                                <ul>
                                <li><a href="#html" onClick={changeToHtml}>index.html</a></li>
                                    <li><a href="#css" onClick={changeToCss}>index.css</a></li>
                                    <li><a href="#js" onClick={changeToJs}>index.js</a></li>
                                </ul>
                                <h4><a href="#all" onClick={changeToAll}>View all</a></h4>
                                <button onClick = {() => {setStatus('back')}} className = 'btn1'>Back</button>
                            </div>
                            <div className='col-lg-9'>
                                <Editor name='index.css' lang='css' value={css} onChange={setCss} />
                                <div style={{ paddingTop: '2%' }}></div>
                                <div className='container'>
                                    <h4>Output:</h4>
                                    <iframe
                                        srcDoc={sourceDoc}
                                        title='output'
                                        sandbox='allow-scripts'
                                        frameBorder='0'
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div style = {{textAlign:"center"}}><button className = 'btn1' onClick = {save}>Save</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (status === "js") {
            return (
                <div style={{ color: 'white' }}>
                    <div className='container'>
                        <div className='headingSec'>
                            <h1>{'{CodeStudio}'}</h1>
                        </div>
                    </div>
                    <div className='container'>
                    <div class = 'inputDiv'>
                            <input type = 'text' name = 'title' onChange = {onTitleChange}/>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h4>File Explorer</h4>
                                <ul>
                                <li><a href="#html" onClick={changeToHtml}>index.html</a></li>
                                    <li><a href="#css" onClick={changeToCss}>index.css</a></li>
                                    <li><a href="#js" onClick={changeToJs}>index.js</a></li>
                                </ul>
                                <h4><a href="#all" onClick={changeToAll}>View all</a></h4>
                                <button onClick = {() => {setStatus('back')}} className = 'btn1'>Back</button>
                            </div>
                            <div className='col-lg-9'>
                                <Editor name='index.js' lang='javascript' value={js} onChange={setJs} />
                                <div style={{ paddingTop: '2%' }}></div>
                                <div className='container'>
                                    <h4>Output:</h4>
                                    <iframe
                                        srcDoc={sourceDoc}
                                        title='output'
                                        sandbox='allow-scripts'
                                        frameBorder='0'
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div style = {{textAlign:"center"}}><button className = 'btn1' onClick = {save}>Save</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (status === 'all') {
            return (
                <div style={{ color: 'white' }}>
                    <div className='container'>
                        <div className='headingSec'>
                            <h1>{'{CodeStudio}'}</h1>
                        </div>
                    </div>
                    <div className='container'>
                    <div class = 'inputDiv'>
                            <input type = 'text' name = 'title' onChange = {onTitleChange}/>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h4>File Explorer</h4>
                                <ul>
                                    <li><a href="#html" onClick={changeToHtml}>index.html</a></li>
                                    <li><a href="#css" onClick={changeToCss}>index.css</a></li>
                                    <li><a href="#js" onClick={changeToJs}>index.js</a></li>
                                </ul>
                                <button onClick = {() => {setStatus('back')}} className = 'btn1'>Back</button>
                            </div>
                            <div className='col-lg-9'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-12'>
                                            <Editor name='index.html' lang='xml' value={html} onChange={setHtml} />
                                        </div>
                                        <div className='col-lg-4 col-md-12'>
                                            <Editor name='index.css' lang='css' value={css} onChange={setCss} />
                                        </div>
                                        <div className='col-lg-4 col-md-12'>
                                            <Editor name='index.js' lang='javascript' value={js} onChange={setJs} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingTop: '2%' }}></div>
                                <div className='container'>
                                    <div className='container'>
                                        <h4>Output:</h4>
                                        <iframe
                                            srcDoc={sourceDoc}
                                            title='output'
                                            sandbox='allow-scripts'
                                            frameBorder='0'
                                            width='100%'
                                            height='100%'
                                        />
                                    </div>
                                    <div style = {{textAlign:"center"}}><button className = 'btn1' onClick = {save}>Save</button></div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            )
        }
        if(status === 'back')
        {
            return <Profile uid = {uid} name = {name}/>
        }
        
    }
    return checkStatus(status);
}
export default Code;