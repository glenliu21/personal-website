import React from 'react';
import { Nav } from 'react-bootstrap';

function ContactItem(props) {
    return (
        <Nav.Link className="contact-item" href={props.href} target="_blank" rel="noopener noreferrer" style={{ padding: "0 0" }}>
            <img src={props.svg} alt={props.alt} />
        </Nav.Link>
    );
}

export default ContactItem;