import React from 'react';

export default function CodeEditor(props) {
  
  return(
    <div className='editor-wrapper'>
        <h2>Code Editor</h2>
        <pre id="editor">
            //Write your code here
        </pre>

        <script src="src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>

            {var editor = ace.edit("editor")}
            {editor.setTheme("ace/theme/twilight")}
            {editor.session.setMode("ace/mode/javascript")}

    </div>
  );
}

