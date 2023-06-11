import React from 'react';
import Sidebar from "../components/NavComponents/Sidebar";
import Footer from '../components/Footer';
import PhilHeader from "../components/PhilComponents/PhilHeader"
import { Col, Container, Row } from 'react-bootstrap';
import PhilCenter from '../components/PhilComponents/PhilCenter';

function Philosophy() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10}>
                    <div className="content-div">
                        <PhilHeader />
                        <PhilCenter />
                        <Footer />
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default Philosophy;