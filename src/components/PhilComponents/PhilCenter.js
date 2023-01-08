import React from 'react';
import PhilArticle from "./PhilArticle";
import Emerson from './Emerson';
import { Col, Row } from 'react-bootstrap';
import descartes from "../../assets/phil_papers/descartes.pdf";
import kant from "../../assets/phil_papers/kant.pdf";

function PhilCenter() {
    return (
        <Row className="phil-content">
            <Col lg={{ span: "3", order: "0" }} xs={{ order: "1" }}>
                <PhilArticle
                    title="Descartes on Changes in Motion"
                    subtitle="An overview of Descartes' Physics, specifically the positions of Occasionalism and Mere Conservatism."
                    link={descartes}
                />
            </Col>
            <Col lg={{ span: "6", order: "1" }} xs={{ order: "0" }}>
                <Emerson />
            </Col>
            <Col lg={{ span: "3", order: "2" }} xs={{ order: "2" }}>
                <PhilArticle
                    title="Kant's Criticism of Metaphysics"
                    subtitle="An examination of Kant's critique of traditional metaphysics and the transcendental illusion of the soul."
                    link={kant}
                />
            </Col>
        </Row>
    );
}

export default PhilCenter;