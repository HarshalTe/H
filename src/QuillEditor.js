// src/QuillEditor.js
import React, { useEffect } from 'react';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import Quill from 'quill';

const QuillEditor = () => {
    useEffect(() => {
        // Initialize Quill editor
        const quill = new Quill('#editor', {
            theme: 'snow',
        });

        // Set initial content
        quill.setContents([
            { insert: 'Hello World!\n' },
            { insert: 'Some initial ', attributes: { bold: true } },
            { insert: 'text\n' },
            { insert: '\n' }
        ]);
    }, []);

    return (
        <div>
            <h2>Quill Text Editor</h2>
            <div id="editor" style={{ height: '300px' }}></div>
        </div>
    );
};

export default QuillEditor;
