// src/TextEditor.js
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css'; // Import default styles

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  return (
    <div>
      <h2>Text Editor</h2>
      <Editor 
        editorState={editorState} 
        onEditorStateChange={handleEditorStateChange} 
      />
    </div>
  );
};

export default TextEditor;
