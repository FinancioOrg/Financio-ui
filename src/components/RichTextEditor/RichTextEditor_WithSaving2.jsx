import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './richTextEditor.css'; // import the CSS file
import { stateToHTML } from 'draft-js-export-html';

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [images, setImages] = useState([]);

  function handleEditorStateChange(newEditorState) {
    setEditorState(newEditorState);
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

  function handleSave() {
    const contentState = editorState.getCurrentContent();
    const articleHtml = stateToHTML(contentState);
    
    // send article data and images to backend
    const data = {
      html: articleHtml
    };

    // send data to backend using fetch or axios
    fetch('/api/save-article', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // handle response
      })
      .catch(error => {
        // handle error
      });
    setRenderedHTML(articleHtml);  

  }

  const RenderedText = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent}}/>;
  };

  const [renderedHTML, setRenderedHTML] = useState(null);


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
        }}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button onClick={handleSave}>Save</button>
      {renderedHTML && <RenderedText htmlContent={renderedHTML} />}
    </div>
  );
}

export default RichTextEditor;