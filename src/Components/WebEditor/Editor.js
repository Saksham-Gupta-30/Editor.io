import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
    const [open, setOpen] = useState(true)

    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button 
                    className='expand-collapse-btn'
                    type='button'
                    onClick={() => setOpen(prevOpen => !prevOpen)} 
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                className='code-mirror-wrapper'
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material',
                    autoCloseTags: true,
                    matchTags: true,
                    autoCloseBrackets: true,
                    matchBrackets: true,
                }}
            />

        </div>
    )
}

export default Editor