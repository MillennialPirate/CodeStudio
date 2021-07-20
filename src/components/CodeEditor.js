import React from 'react';
import Editor from './editor';
class CodeEditor extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            html : '',
            css : '',
            js : '',
            status : 'all'
        }
        this.sourceDoc = `<html><style>${this.state.css}</style><body>${this.state.html}</body><script>${this.state.js}</script></html>`
        this.setHtml = this.setHtml.bind(this);
        this.setCss = this.setCss.bind(this);
        this.setJs = this.setJs.bind(this);
    }
    setHtml(val)
    {
        this.setState({html : val});
    }
    setCss(val)
    {
        this.setState({css : val});
    }
    setJs(val)
    {
        this.setState({js : val});
    }
    render()
    {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12'>
                            <Editor name='index.html' lang='xml' value={this.state.html} onChange={this.setHtml} />
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <Editor name='index.css' lang='css' value={this.state.css} onChange={this.setCss} />
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <Editor name='index.js' lang='javascript' value={this.state.js} onChange={this.setJs} />
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '2%' }}></div>
                <div className='container'>
                    <div className='container'>
                        <h4>Output:</h4>
                        <iframe
                            srcDoc={this.sourceDoc}
                            title='output'
                            sandbox='allow-scripts'
                            frameBorder='0'
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div style = {{textAlign:"center"}}><button className = 'btn1' >Share</button></div>
                </div>
            </div>
        )
    }
}
export default CodeEditor;