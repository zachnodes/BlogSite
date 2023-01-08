import React from 'react';
import previewStyle from '../styles/Preview.module.css'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
const Preview = ({title, descrip, date, slug, postID, userID}) => {
    const {user} = useAuthContext()
    const {posts, dispatch} = usePostContext()

    const delPosts = async () => {
        const res = await fetch('/profile/' + postID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        })

        const json = await res.json()
        
        if (res.ok) {
          dispatch({type: 'DELETE_POSTS', payload: json})

        }
        if (!res.ok) {
            console.log(json.error)
        }
        
      }
    
    
    
    return (
        <div className={previewStyle.card}>
            <h2>{title}</h2>
            <p>{date.toLocaleDateString()}</p>
            <p>{descrip}</p>
            <div>
                <Link to={`/articles/${slug}`}>Read More</Link>
            </div>
            {userID && <div><button onClick={() => delPosts()}>Delete</button></div>}
            <div>
                {userID && <Link to={`/articles/edit/${slug}`}>Edit</Link>}
            </div>
            
        </div>
    );
}


export default Preview;
