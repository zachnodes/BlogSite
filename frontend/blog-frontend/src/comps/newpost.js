import {React, useState} from 'react';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';

const Newpost = () => {
    const [article, setarticle] = useState({
        title: '',
        description: '',
        content: ''
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setarticle(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })

    }
    return (
        <div>
            <Navbar/>
            <div className={regstyles.wrapper}>
                <div className={regstyles.createpost}>
                    <form>

                        <div>
                            <div>
                                <label htmlFor="title">Title</label>
                            </div>
                            <div>
                                <input type="text" name='title' value={article.title} onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="description">Description</label>
                            </div>
                            <div>
                                <textarea name="description" value={article.description} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="content">Content</label>
                            </div>
                            <div>
                                <textarea name="content" value={article.content} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div>
                            <button>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newpost;
