import React from "react";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import {CreateArticle} from '../../service/ArticleService';
import { stateToHTML } from 'draft-js-export-html';

const ariaLabel = { 'aria-label': 'description' };

export default function NewArticle(){
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [inputTittle, setInputTittle] = useState('New article');

    const handleInputChange = (event) => {
        setInputTittle(event.target.value);
    };

    function handleSave() {
        const contentState = editorState.getCurrentContent();
        const articleHtml = stateToHTML(contentState);
        
        // send article data and images to backend
        const data = {
          Title: inputTittle,
          Text: articleHtml,
          CollectionIds: ['641988e35e7dbd5b89a54b0f']
        };
    
        // send data to backend using fetch or axios
        CreateArticle(data);
      }

    return(
        <div>
            <Input defaultValue="New article" inputProps={ariaLabel} style={{ fontSize: '24px' }} onChange={handleInputChange}/>
            <RichTextEditor editorState = {editorState} setEditorState = {setEditorState}/>
            <Button variant="contained" onClick={handleSave}>Save</Button>
        </div>
    )
}