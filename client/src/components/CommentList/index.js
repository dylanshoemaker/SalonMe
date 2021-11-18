import { useMutation } from '@apollo/react-hooks';
import React from 'react';
import { REMOVE_COMMENT } from '../../utils/mutations';



const CommentList = ({ comments, productId }) => {

    const [removeComment] = useMutation(REMOVE_COMMENT);


    const handleFormSubmit = async event => {
        event.preventDefault();
        let commentId = event.target.value;

        try {
            // add comment to database
            await removeComment({
                variables: { productId, commentId }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-header">
               <span className="text-light">Reviews</span> 
            </div>
            <div className="card-body">
                {comments &&
                    comments.map(comment => (
                        <form className="flex-row justify-center justify-space-between-md align-stretch"
                         key={comment._id}>
                            <p className="pill mb-3" >
                            {comment.commentBody}
                            </p>
                            <button value={comment._id} onClick={handleFormSubmit} className="btn col-12 col-md-3" type="submit">
                            Delete
                            </button>
                            
                        </form>
                    ))}
            </div>
        </div>
    );
};

export default CommentList;