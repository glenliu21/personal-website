import React from 'react';

function TechBox(props) {
    return ( 
        <div className="tech-box">
            <h1>{props.tech}</h1>
        </div> 
    );
}

export default TechBox;