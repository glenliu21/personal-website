import React from 'react';
import { Image } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import { Nav } from 'react-bootstrap';
import TechBox from './TechBox';

function ProjectCell(props) {
    return (
        <div className="project-cell">
            <div className="project-content">
                <div className="project-img">
                    <Nav.Link href={props.href} target="_blank" rel="noopener noreferrer">
                        <Image src={props.img} alt={`${props.title}.img`} />
                    </Nav.Link>
                </div>
                <div>
                    <div className="project-text">
                        <a href={props.href} target="_blank" rel="noopener noreferrer">
                            <h1>{props.title}</h1>
                        </a>
                        <h2>{props.desc}</h2>
                    </div>
                    <div className="project-tech">
                        {props.tech.map((tech, index) => (
                            <TechBox key={index} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
            <Divider className="project-divider" />
        </div>
    );
}

export default ProjectCell;