import React from 'react';

function PageIcon(props) {
    return ( 
        props.currentHover 
            ? <img src={props.hovered_svg} alt={props.hovered_alt} className="nav-icon"/> 
            : <img src={props.svg} alt={props.alt} className="nav-icon"/>
    );
}

export default PageIcon;