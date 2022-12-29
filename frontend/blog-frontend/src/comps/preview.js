import React from 'react';
import previewStyle from '../styles/Preview.module.css'
import {Link} from 'react-router-dom'
const Preview = ({title, descrip, date, id, slug}) => {
    
    
    return (
        <div className={previewStyle.card}>
            <h2>{title}</h2>
            <p>{date.toLocaleDateString()}</p>
            <p>{descrip}</p>
            <div>
                <Link to={`/articles/${slug}`}>Read More</Link>
            </div>
        </div>
    );
}

export default Preview;
