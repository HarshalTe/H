// src/Editor.js
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; // Import the Header tool
import ImageTool from '@editorjs/image'; // Import the Image tool

const Editor = () => {
    const editorRef = useRef(null);
    const editorInstance = useRef(null); // To hold the editor instance

    useEffect(() => {
        // Initialize Editor.js
        editorInstance.current = new EditorJS({
            holder: editorRef.current,
            tools: {
                header: {
                    class: Header, // Use imported Header
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool, // Use imported Image tool
                    config: {
                        uploader: {
                            // Example uploader configuration
                            uploadByFile(file) {
                                // Your upload function here
                                return new Promise((resolve, reject) => {
                                    // Simulate a file upload
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        resolve({
                                            success: 1,
                                            file: {
                                                url: reader.result,
                                            },
                                        });
                                    };
                                    reader.onerror = () => {
                                        reject('Upload failed');
                                    };
                                    reader.readAsDataURL(file);
                                });
                            },
                        },
                    },
                },
            },
            onReady: () => {
                console.log('Editor.js is ready to work!');
            },
        });

        // Clean up the editor instance on component unmount
        return () => {
            editorInstance.current.destroy();
        };
    }, []);

    const saveData = async () => {
        const savedData = await editorInstance.current.save();
        console.log('Data saved: ', savedData);
        // Handle saving data to your backend or state
    };

    return (
        <div>
            <div ref={editorRef} />
            <button onClick={saveData}>Save</button>
        </div>
    );
};

export default Editor;
