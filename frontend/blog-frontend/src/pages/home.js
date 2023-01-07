import {React, useState, useEffect} from 'react';
import Navbar from '../comps/navbar';
import Preview from '../comps/preview';
import appStyles from '../styles/Home.module.css'
import { usePostContext } from '../hooks/usePostContext';


const Home = () => {
    const {posts, dispatch} = usePostContext()

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('/articles')
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
      <div className={appStyles.cardcont}>
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
      
    </div>
  );
}

export default Home;