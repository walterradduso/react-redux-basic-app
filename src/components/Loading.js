import React from 'react';
import loader from '../assets/loader.gif';

export default () => (
    <div className="loading-container">
        <div className="loading">
            <img className="loading-gif" src={loader} alt="loader" />
            <span className="loading-text">Loading</span>
        </div>
    </div>
);
