import React from 'react'; 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';
class Editor extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : this.props.name,
            value : this.props.value, 
            onChange : this.props.onChange,
            lang : this.props.lang
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(editor, data, value){
        console.log(this.state.value);
        this.props.onChange(value);
    }
    render()
    {
        return(
            <div>
                <div className = 'container' >
                    <div class = 'title'>
                        <h4>{this.state.name}</h4>
                    </div>
                    <div class = 'body' >
                        <Controlled
                            onBeforeChange = {this.changeHandler}
                            value = {this.value}
                            options = {{
                                lineWrapping : true, 
                                lint : true, 
                                mode : this.state.lang, 
                                lineNumbers : true,
                                theme:'material'
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Editor;