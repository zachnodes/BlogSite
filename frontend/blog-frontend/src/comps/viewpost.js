import {React, useState, useEffect} from 'react';
import Navbar from './navbar';
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Blog from '../styles/Blog.module.css'


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
        console.log(slug)
 
    }, []);
    
    return (
        <div>
            <Navbar/>
            <div >
                {
                    posts.map((post) => {
                        post.createdAt = new Date
                        return (
                            <div className={Blog.wrapper}>
                                <div className={Blog.content}>
                                <div className={Blog.inner}>
                                        <h1>{post.title} ****</h1>
                                        <p id={Blog.dateandtitle}>{post.createdAt.toLocaleDateString()}</p>
                                
                                    
                                        <ReactMarkdown>
                                            {post.content}
                                        </ReactMarkdown>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Viewpost;
