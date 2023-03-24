import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './richTextEditor.css'; // import the CSS file

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleEditorStateChange(newEditorState) {
    setEditorState(newEditorState);
  }

  function handleContentStateChange(newContentState) {
    // do something with the new content state
  }

  function handleImageUpload(file) {
    // handle image upload
    return new Promise((resolve, reject) => {
      resolve({ data: { link: 'https://via.placeholder.com/150' } });
    });
  }

  function handleFileUpload(file) {
    // handle file upload
    return new Promise((resolve, reject) => {
      resolve({ data: { link: 'https://via.placeholder.com/150' } });
    });
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        onContentStateChange={handleContentStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
          },
          blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'Unstyled'],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          list: {
            inDropdown: true,
            options: ['unordered', 'ordered'],
          },
          textAlign: {
            inDropdown: true,
            options: ['left', 'center', 'right', 'justify'],
          },
          link: {
            inDropdown: true,
          },
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: true },
          },
          file: {
            uploadCallback: handleFileUpload,
          },
        }}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}

export default RichTextEditor;
