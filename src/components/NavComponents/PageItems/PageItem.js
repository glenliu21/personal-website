import React from 'react';
// import { Nav } from 'react-bootstrap';
import PageIcon from './PageIcon';
import { Link } from 'react-router-dom';

function PageItem(props) {
    const [isHovering, setHovering] = React.useState(false);

    function toggleHovering() {
        setHovering(!isHovering);
    }

    return (
        <Link
            className='nav-link'
            to={props.href}
            onMouseEnter={toggleHovering}
            onMouseLeave={toggleHovering}
        >
            <PageIcon
                currentHover={isHovering}
                hovered_svg={props.hovered_svg}
                hovered_alt={props.hovered_alt}
                svg={props.svg}
                svg_alt={props.alt}
            />
            <h1>{props.h1}</h1>
        </Link>
    );
}

export default PageItem;