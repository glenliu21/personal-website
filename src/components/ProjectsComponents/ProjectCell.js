import React from 'react';
import { Image } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import { Nav } from 'react-bootstrap';

function ProjectCell(props) {
    return (
        <div className="project-cell">
            <div className="project-content">
                <Nav.Link href={props.href} target="_blank" rel="noopener noreferrer">
                    <Image src={props.img} alt={`${props.title}.img`} />
                </Nav.Link>
                <div className="project-text">
                    <a href={props.href} target="_blank" rel="noopener noreferrer">
                        <h1>{props.title}</h1>
                    </a>
                    <h2>{props.subtitle}</h2>
                </div>
            </div>
            <Divider className="project-divider" />
        </div>
    );
}

export default ProjectCell;