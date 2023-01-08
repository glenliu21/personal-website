import React from 'react';
import Sidebar from "../components/NavComponents/Sidebar";
import Footer from '../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectList from '../components/ProjectsComponents/ProjectList';

function Projects() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10}>
                    <div className="content-div">
                        <h1 className="projects-title">Projects</h1>
                        <ProjectList />
                        <Footer />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;