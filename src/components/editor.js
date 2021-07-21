import React from 'react'; 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';
const Editor = ({name, value, onChange, lang}) => {
    const changeHandler = (editor, data, value) => {
        //call whenever a change is detected -> in turn call the onchange function of codePart
        onChange(value);
    }
    return (
        <div>
            <div className = 'container' >
                <div class = 'title'>
                    <h4>{name}</h4>
                </div>
                <div class = 'body' >
                    <Controlled
                        onBeforeChange = {changeHandler}
                        value = {value}
                        options = {{
                            lineWrapping : true, 
                            lint : true, 
                            mode : lang, 
                            lineNumbers : true,
                            theme:'material'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Editor;