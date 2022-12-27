import React from 'react';
import previewStyle from '../styles/Preview.module.css'
import {useParams, BrowserRouter, Routes, Route, Link} from 'react-router-dom'
const Preview = ({title, descrip, date, id}) => {
    
    
    return (
        <div className={previewStyle.card}>
            <h2>{title}</h2>
            <p>{date.toLocaleString()}</p>
            <p>{descrip}</p>
            <div>
                <Link to={`/articles/${id}`}>Read More</Link>
            </div>
        </div>
    );
}

export default Preview;
