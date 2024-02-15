import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Header from "../components/Header";

function Experience() {

    const [Experiences, setExperiences] = useState({ page_title: "", experience_content: [] });

    useEffect(() => {        
        const getExperienceData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/experience');
        
                if (response.status !== 200) {
                    throw new Error('Error getting API connection');
                }
                
                setExperiences(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error('Error getting experiences:', error);
            }
        };

        getExperienceData();
    }, []);

    const experiences = Experiences.experience_content.map((experience, index) => (
        <div key={index}>
            <Row>
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>
                                {experience.experience_description}
                                {experience.url !== "" && (
                                    <Link className="lead" to={experience.url} target="_blank" rel="noopener noreferrer">
                                        <BsBoxArrowUpRight className="m-3" />
                                    </Link>
                                )}
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            {experience.experience_paragraphs.map((experience_paragraph, index) => (
                                    <p key={index}>{experience_paragraph}</p>
                                ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
        </div>
    ));

    return (<div>
                <Header PageName="Experience" />
                <Container className="p-5 shadow-lg">
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <article>
                                {experiences}
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>);
}

export default Experience;