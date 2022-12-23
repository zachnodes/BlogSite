import React from 'react';
import previewStyle from '../styles/Preview.module.css'
const Preview = () => {
    return (
        <div className={previewStyle.card}>
            <h2>This is a test title</h2>
            <p>12/12/2022</p>
            <p>Tag</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
        </div>
    );
}

export default Preview;
