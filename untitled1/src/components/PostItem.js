import React from 'react';
import './PostItem.css'
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap';

const PostItem = (props) => {

    return (
        <div className="post col">
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        <p>Post №{props.post.id}</p>
                        <h5>{props.post.title}</h5>
                    </ToastHeader>
                    <ToastBody>
                        <a href={'/post/'+props.post.id}>{props.post.body.slice(0, 20)+'...'}</a>
                    </ToastBody>

                </Toast>
            </div>
        </div>
    );
};
export default PostItem;