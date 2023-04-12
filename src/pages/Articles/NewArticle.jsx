import React from "react";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { CreateArticle } from '../../service/ArticleService';
import { stateToHTML } from 'draft-js-export-html';
import DOMPurify from 'dompurify';


const ariaLabel = { 'aria-label': 'description' };

export default function NewArticle() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [inputTitle, setInputTitle] = useState('New article');
  const [category, setCategory] = useState('');

  const handleInputChange = (event) => {
    setInputTitle(event.target.value);
  };

  async function handleClassify() {
    const contentState = editorState.getCurrentContent();
    const articleHtml = stateToHTML(contentState);
    const sanitizedHtml = DOMPurify.sanitize(articleHtml, { ALLOWED_TAGS: [] });
    const plainText = sanitizedHtml.replace(/<[^>]+>/g, '');

    // send article text to backend for classification
    const response = await fetch('http://localhost:5000/classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: plainText, categories: ['Stocks and Investing','Banking', 'Personal Finance', 'Business and Economy', 'International Trade', 'Real Estate'] })
    });

    const data = await response.json();

    // update category state with the result from the backend
    setCategory(data.category);
  }

  function handleSave() {
    const contentState = editorState.getCurrentContent();
    const articleHtml = stateToHTML(contentState);

    // send article data and images to backend
    const data = {
      Title: inputTitle,
      Text: articleHtml,
      CollectionIds: ['641988e35e7dbd5b89a54b0f']
    };

    // send data to backend using fetch or axios
    CreateArticle(data);
  }

  return (
    <div>
      <Input
        defaultValue="New article"
        inputProps={ariaLabel}
        style={{ fontSize: '24px' }}
        onChange={handleInputChange}
      />
      <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
      <Button variant="outlined" onClick={handleClassify}>
        Classify
      </Button>
      {category && <div>{`Category: ${category}`}</div>}
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}