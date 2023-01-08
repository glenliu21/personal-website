import React from 'react';
import { Link } from 'react-router-dom';

function PhilArticle(props) {
    return (
        <div className="phil-article">
            <Link to={props.link} target="_blank" rel="noopener noreferrer">
                <h1>{props.title}</h1>
            </Link>
            <h3>
                {props.subtitle}
            </h3>
        </div>
    );
}

export default PhilArticle;