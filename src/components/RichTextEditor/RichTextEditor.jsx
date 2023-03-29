import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './richTextEditor.css'; // import the CSS file

function RichTextEditor(props) {
  const [images, setImages] = useState([]);

  function handleEditorStateChange(newEditorState) {
    props.setEditorState(newEditorState);
  }

  function handleContentStateChange(newContentState) {
    // do something with the new content state
  }

  function handleImageUpload(file) {
    // store image in state
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages([...images, reader.result]);
        resolve({ data: { link: reader.result } });
      };
      reader.readAsDataURL(file);
    });
  }

  return (
    <div>
      <Editor
        editorState={props.editorState}
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
            previewImage: true
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