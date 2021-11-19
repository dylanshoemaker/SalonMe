import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENT } from "../../utils/queries";
import './index.css';


const CommentForm = () => {
    const [commentBody, setText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
  
    const [addComment, { error }] = useMutation(ADD_COMMENT, {
      update(cache, { data: { addComment } }) {
        try {
          // could potentially not exist yet, so wrap in a try...catch
          const { comments } = cache.readQuery({ query: QUERY_COMMENT });
          cache.writeQuery({
            query: QUERY_COMMENT,
            data: { commentBody: [addComment, ...comments] },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  
    const handleChange = (event) => {
      if (event.target.value.length <= 280) {
        setText(event.target.value);
        setCharacterCount(event.target.value.length);
      }
    };
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        // add thought to database
        await addComment({
          variables: { commentBody },
        });
  
        // clear form value
        setText("");
        setCharacterCount(0);
      } catch (e) {
        console.error(e);
      }
    };

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