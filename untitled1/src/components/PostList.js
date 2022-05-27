import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {

    return (
        <div className="postList container">
            <div className="row row-cols-auto">
                {posts.map((post) =>
                    <PostItem post = {post} key={post.id}/>
                )}
            </div>
        </div>
    );
};


export default PostList;