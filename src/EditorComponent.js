// src/EditorComponent.js
import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const EditorComponent = () => {
    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs', // ID of the element that should contain the Editor

            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['link'],
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
            },
        });

        // Cleanup function to destroy the editor on unmount
        return () => {
            editor.destroy();
        };
    }, []);

    return (
        <div>
            <h2>Editor.js Example</h2>
            <div id="editorjs" style={{ border: '1px solid #ccc', padding: '10px', minHeight: '300px' }}></div>
        </div>
    );
};

export default EditorComponent;
