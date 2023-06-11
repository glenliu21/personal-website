import React from 'react';
import Sidebar from "../components/NavComponents/Sidebar";
import { Col, Container, Row } from 'react-bootstrap';
import Keywords from "../components/BlogComponents/Keywords";
import { Outlet } from 'react-router-dom';

function Blog() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={7}>
                    <div className="content-div">
                        <Outlet />
                    </div>
                </Col>
                <Col lg={3}>
                    <Keywords />
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;