import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';
import './index.css';


const CommentForm = ({ productId }) => {

    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(event);

        try {
            // add comment to database
            await addComment({
                variables: { commentBody, productId }
            });
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.log(e);
        }

        
    }

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Leave a review for this product..."
                    value={commentBody}
                    className="form-input col-12 col-md-9 white"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;