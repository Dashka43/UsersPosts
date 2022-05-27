
import './App.css';
import React, {useState} from 'react';
import Posts from './Posts.js';
import Post from './Post.js';

import {BrowserRouter, Route, Link, Router, Routes} from "react-router-dom";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts/>} />
                <Route path="/post/:postId" element={<Post/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
