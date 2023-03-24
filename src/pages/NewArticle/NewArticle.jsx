import React from "react";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor_WithSaving2';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function NewArticle(){
    return(
        <div>
            <Input defaultValue="New article" inputProps={ariaLabel} style={{ fontSize: '24px' }}/>
            <RichTextEditor/>
            <Button variant="contained">Save</Button>
        </div>
    )
}