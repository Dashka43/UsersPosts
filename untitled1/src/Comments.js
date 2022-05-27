import React from 'react';
import Comment from "./components/Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map((comment) =>
                <Comment comment = {comment} key={comment.id}/>
            )}

        </div>
    );
};


export default Comments;