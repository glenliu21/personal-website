import React from 'react';
import HeaderIntro from "../components/HomeComponents/HeaderIntro";
import HomeBlurb from '../components/HomeComponents/HomeBlurb';
import HomeTabBar from '../components/HomeComponents/HomeTabBar';
import HomePicture from '../components/HomeComponents/HomePicture';
import Sidebar from "../components/NavComponents/Sidebar";
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={{ span: "6", order: "0" }} xs={{ order: "1" }}>
                    <div className="content-div">
                        <div style={{ marginTop: "161px" }}></div>
                        <HeaderIntro />
                        <HomeBlurb />
                        <HomeTabBar />
                        <Footer />
                    </div>
                </Col>
                <Col lg={{ span: "4"}}>
                    <HomePicture />
                </Col>
            </Row>
        </Container>

    );
}

export default Home;