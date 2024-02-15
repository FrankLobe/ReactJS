import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Education() {

    const [Educations, setEducations] = useState({ page_title: "", education_content: [] });

    useEffect(() => {        
        const getEducationData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/education');
        
                if (response.status !== 200) {
                    throw new Error('Error getting API connection');
                }
                
                setEducations(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error('Error getting educations:', error);
            }
        };

        getEducationData();
    }, []);

    const educations = Educations.education_content.map((education, index) => (
        <Row key={index}>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <Row>
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p>{education.year}</p>
                    </Col>
                </Row>
            </Col>
            <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <Row>
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h3>{education.program}</h3>
                    </Col>
                </Row>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <Link className="text-primary align-middle pt-5" to={education.url} target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid mt-3" alt="logo" src={`/images/${education.logo}`} />
                    </Link>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                </Col>
            </Col>
        </Row>
    ));

    return (<div>
                <Header PageName="Education" />
                <Container className="p-5 shadow-lg">
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <article>
                                {educations}
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>);
}

export default Education;