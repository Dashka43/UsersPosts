import React, {useEffect, useState} from 'react';

import Comments from "./Comments";
import {useParams} from "react-router-dom";
import { Button, Fade, Toast, ToastHeader, ToastBody } from 'reactstrap';




const Post = () => {
    const [post, setPost] = useState([])
    const [comment, setComment] = useState([])
    const [open, setOpen] = useState(false);
    let {postId} = useParams();
    useEffect(() => {
        //fetch data
        let url = 'https://jsonplaceholder.typicode.com/posts/'+postId
        fetch(url)
            .then((response) => response.json())
            .then(json => setPost(json));
    }, [post])

    useEffect(() => {
        //fetch data
        let url = 'https://jsonplaceholder.typicode.com/posts/'+postId+'/comments'
        fetch(url)
            .then((response) => response.json())
            .then(json => setComment(json));
    }, [comment])

    return (
        <div>
            <div className="post">
                <Toast>
                    <ToastHeader>
                <p>Post №{post.id}</p><h3>{post.title}</h3>
                    </ToastHeader>
                    <ToastBody>

                <p>{post.body}</p>
                    </ToastBody>
                    <div className="container">
                        <Button
                            className="btn btn-secondary btn "
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}
                        >
                            Show comments
                        </Button>
                        <a href="/posts" className="btn btn-secondary btn " tabIndex="-1" role="button"
                           aria-disabled="true">Back</a>

                    </div>
                </Toast>
            </div>

            <Fade in={open}>
                <div id="example-fade-text">
                    <Comments comments={comment}/>
                </div>
            </Fade>

        </div>

    );
};

export default Post;