import React, {useState, useEffect} from 'react';
import PostList from "./components/PostList";
import Select from "./components/UI/Select/Select";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [userSelect, setUserSelect] = useState('')

    useEffect(() => {
        //fetch data
        let url = 'https://jsonplaceholder.typicode.com/posts'
        if (userSelect && +userSelect>0) url += '?userId=' + userSelect
        fetch(url)
            .then((response) => response.json())
            .then(json => setPosts(json));
    }, [userSelect])

    return (
        <div>
            <div className="App">
                <Select
                    onChange={setUserSelect}
                />
                <PostList posts={posts}/>
            </div>

        </div>
    );

};

export default Posts;