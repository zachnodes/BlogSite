import {React, useState, useEffect} from 'react';
import Navbar from './navbar';
import {useParams, BrowserRouter, Routes, Route, Link} from 'react-router-dom'


const Viewpost = () => {
    const [posts, setposts] = useState({});
    const {id} = useParams()

    const getPost = async () => {
        const res = await fetch('articles/' + id)
        const json = await res.json()

        if (res.ok) {
            setposts(json)
        }
    }
    useEffect(() => {
        getPost()
 
    }, []);
    
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <h1>{posts.title}</h1>
                <p>{posts.createdAt}</p>
            </div>
            <div>
                {posts.content}
            </div>
            
        </div>
    );
}

export default Viewpost;
