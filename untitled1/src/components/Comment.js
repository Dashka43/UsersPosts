import React from 'react';


const Comment = (props) => {

    return (
        <div className="comment">

            <p> <strong>{props.comment.email} </strong>
            {props.comment.body}</p>
        </div>
    );
};
export default Comment;