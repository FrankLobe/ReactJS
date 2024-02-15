import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from 'react-bootstrap';
import { BsBoxArrowUpRight } from "react-icons/bs";
import Header from "../components/Header";

function Certification() {

    const [Certifications, setCertifications] = useState({ page_title: "", certification_content: [] });

    useEffect(() => {
        const getCertificationData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/certification');
        
                if (response.status !== 200) {
                    throw new Error('Error getting API connection');
                }
        
                setCertifications(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error('Error getting certifications:', error);
            }
        };

        getCertificationData();
    }, []);

    const certifications = Certifications.certification_content.map((certification, index) => (
        <Row key={index}>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <Row>
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p>{certification.year}</p>
                    </Col>
                </Row>
            </Col>
            <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <p className="h4">{certification.certification_institution}</p>
                </Col>
                <Row>
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p className="lead">{certification.certification_description}
                        {certification.url !== "" && (
                            <Link to={certification.url} target="_blank" rel="noopener noreferrer">
                                <BsBoxArrowUpRight className="m-3" />
                            </Link>
                        )}                        
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    ));

    return (<div>
                <Header PageName="Certification" />
                <Container className="p-5 shadow-lg">
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <article>
                                {certifications}
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>);
}

export default Certification;