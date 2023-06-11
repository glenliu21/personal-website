import React from 'react';
import { Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/image';
import Emerson from "../../assets/pictures/emerson_photo.jpg";

function EmersonPhoto() {
    return (  
        <Nav.Link className="emerson-photo" href="https://historycambridge.org/james/James%2010.html" target="_blank" rel="noopener noreferrer" style={{padding: "0"}}>
            <Image src={Emerson} alt="glen-in-front-of-emerson-hall.jpg"/>
        </Nav.Link>
    );
}

export default EmersonPhoto;