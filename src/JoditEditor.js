import React, { useEffect, useRef } from 'react';

import 'jodit/dist/jodit.min.css'; // Corrected CSS import

import Jodit from 'jodit';

const JoditEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const editor = useRef(null);

  useEffect(() => {
    // Initialize Jodit editor
    editor.current = new Jodit(editorRef.current, {
      height: 400,
      width: 600,
      // Add other configurations here
      buttons: ['bold', 'italic', 'underline', 'insertText'],
      controls: {
        insertText: {
          iconURL: 'https://xdsoft.net/jodit/logo.png',
          exec: function (editor) {
            editor.events.fire('someEvent', 'world!!!');
          }
        }
      },
      language: 'en' // or your preferred language
    });

    // Set initial value
    editor.current.value = value;

    // Event listener for changes
    editor.current.events.on('change', () => {
      onChange(editor.current.value);
    });

    // Cleanup function to destroy editor instance
    return () => {
      editor.current?.destroy();
    };
  }, [value, onChange]);

  return <div ref={editorRef}></div>;
};

export default JoditEditor;
