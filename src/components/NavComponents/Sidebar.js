import React from "react";
import "../../App.css";
import { Nav, Navbar } from "react-bootstrap";
import ProfileSection from "./ProfileSection";
import ContactBar from "./ContactItems/ContactBar";
import { Container } from "@mui/system";
import PageItems from "./PageItems/PageItems";

function Sidebar() {
    return (
        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <ProfileSection />
                        <PageItems />
                        <ContactBar />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Sidebar;