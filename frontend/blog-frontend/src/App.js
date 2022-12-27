import {React, useState, useEffect} from 'react';
import Navbar from './comps/navbar';
import Preview from './comps/preview';
import appStyles from './styles/Home.module.css'


function App() {
  const [blogPosts, setblogPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch('/articles')
    const json = await res.json()

    if (res.ok) {
      console.log(res)
      setblogPosts(json)
    }

  }
  
  useEffect(() => {
    getPosts()

  }, []);


  return (
    <div>
      <Navbar/>
      <div className={appStyles.cardcont}>
        {
          blogPosts.map(post => {
            return (
              <div key={post._id}>
                <Preview
                  title={post.title}
                  descrip={post.description}
                  date={post.createdAt}
                  id={post._id}
                />
              </div>
            )
          })
        }

      </div>
      
    </div>
  );
}

export default App;
