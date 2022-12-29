import {React, useState, useEffect} from 'react';
import Navbar from './navbar';
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'


const Viewpost = () => {
    const [posts, setposts] = useState([]);
    const {slug} = useParams()
  

    const getPost = async () => {
        const res = await fetch('/articles/' + slug)
        const json = await res.json()

        if (res.ok) {
            setposts([json])
        }
    }
    useEffect(() => {
        getPost()
 
    }, []);
    
    return (
        <div>
            <Navbar/>
            {
                posts.map((post) => {
                    post.createdAt = new Date
                    return (
                        <div>
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.createdAt.toLocaleDateString()}</p>
                            </div>
                            <div>
                            <ReactMarkdown>
                                {post.content}
                            </ReactMarkdown>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Viewpost;
