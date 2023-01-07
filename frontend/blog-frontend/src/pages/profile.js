import {React, useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
import Navbar from '../comps/navbar';
import Preview from '../comps/preview';
import {useParams} from 'react-router-dom'

const Profile = () => {
    const {posts, dispatch} = usePostContext()
    const {user} = useAuthContext()
    const {username} = useParams()
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'))
       const getPosts = async () => {
            const res = await fetch('/profile/' + username, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
            })
            const json = await res.json()
        
            if (res.ok) {
              dispatch({type: 'GET_POSTS', payload: json})
            }
        
          }
          getPosts() 
          
    }, []);

    return (
        <div>
        <Navbar/>
            <h1>Hello {user && user.username}</h1>
            {
          posts && posts.map(post => {
            post.createdAt = new Date
            return (
              <div key={post._id}>
                <Preview
                  title={post.title}
                  descrip={post.description}
                  date={post.createdAt}
                  slug={post.slug}
                />
              </div>
            )
          })
        }
            
        </div>
    );
}

export default Profile;