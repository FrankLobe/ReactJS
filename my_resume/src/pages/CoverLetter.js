import { Navigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import Header from "../components/Header";

function CoverLetter () {

    const contact = JSON.parse(localStorage.getItem('contact'));
    
    if (contact === null) {
        return <Navigate to="/Contact"/>;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const getCityProvince = () => {

        if (contact.city !== "" && contact.province !== "") {
            return (
                <p className="mb-1">{contact.city}, {contact.province}</p>
            )
        } else if (contact.city !== "") {
            return (
                <p className="mb-1">{contact.city}</p>
            )
        } else if (contact.province !== "") {
            return (
                <p className="mb-1">{contact.province}</p>
            )
        }

    }; 

    const getBody = () => {
        if (contact.jobType === "Progress OpenEdge 4GL/ABL Application Development") {
            return (
                <div>
                    <p>As an individual, my driving passion lies in utilizing information technology to creatively solve business
                        problems. My journey towards this goal began in 1998 after completing my undergraduate studies in commerce,
                        followed by graduate studies in applied information technology. I embarked on a path focused on Progress
                        OpenEdge 4GL/ABL application development within the financial services industry.</p>
                    <p>I have an extensive track record of delivering innovative solutions and driving successful projects throughout my
                        career. As a Senior Progress OpenEdge 4GL/ABL Application Developer, I led the development of several
                        groundbreaking products that significantly contributed to the success of Rocket Mortgage, State Street, Sun
                        Life, and other esteemed organizations. One notable accomplishment was the creation of the Enhanced Nondelegated
                        Correspondent Lending Channel, which bridged the gap between wholesale lending and traditional non-delegated
                        correspondent lending. This product's successful launch in all 50 states propelled Rocket Mortgage's financial
                        performance.</p>
                    <p>My expertise in Progress OpenEdge ABL, Progress 4GL, and other technologies, coupled with my strong analytical
                        and problem-solving skills, enabled me to lead comprehensive analysis, design system specifications, and develop
                        advanced functionalities for various applications. I have successfully integrated middleware, REST APIs, and web
                        front ends, ensuring seamless communication and optimal user experiences</p>
                    <p>Throughout my career, I have consistently demonstrated my ability to navigate complex legacy systems, integrate
                        third-party solutions, and comply with industry-specific regulations. For instance, at Bank of Montreal, I
                        oversaw the integration of Norkom's advanced anti-money laundering solution across multiple banking divisions,
                        streamlining transaction monitoring and enhancing compliance. I effectively collaborated with vendors, managed
                        project timelines, and ensured successful implementation.</p>
                    <p>In addition to my technical expertise, I possess strong leadership skills. I have managed the development aspects
                        of projects, from ideation to completion. I am adept at delivering projects on time and within budget.</p>
                    <p>My educational background includes a Postgraduate Diploma in Applied Information Technology and a Bachelor's
                        Degree in Commerce with a specialization in Finance. These qualifications have provided me with a solid
                        foundation in both technical and business domains, allowing me to bridge the gap between IT and organizational
                        objectives effectively.</p>
                    <p>In my pursuit of excellence, I am seeking like-minded individuals with whom I can achieve great things. I am
                        eager to collaborate with organizations that share my drive and vision. Additionally, I am actively seeking
                        opportunities to further develop my skills and expand my knowledge in these domains. Ultimately, my aim is to
                        leave a positive impact on this world, making it better than I found it. If you have the capacity to assist me
                        in any of these endeavors, I sincerely look forward to hearing from you and the possibility of creating
                        something truly remarkable together.</p>
                </div>
            )
        } else if (contact.jobType === "Machine Learning Engineering") {
            return (
                <div>
                    <p>The human desire to find creative solutions to problems has been the primary catalyst for the evolution of
                        mankind. As an individual, my driving passion lies in utilizing information technology to creatively solve
                        business problems. I firmly believe that the next phase of human development will be characterized by the
                        transition of decision-making from subjective human intuition to objective science. This transformation will be
                        accomplished by leveraging the wealth of cumulative knowledge we have acquired throughout history.</p>
                    <p>By employing models that consider factors beyond the scope of human cognition, we can harness this cumulative
                        information. This field, known as machine learning, and its broader discipline of artificial intelligence,
                        enables us to analyze and make sense of vast datasets. My goal is to actively contribute to the development of
                        machine learning models that harness the power of our society's historical information to make informed
                        decisions that benefit all members of our society.</p>
                    <p>My journey towards this goal began in 1998 after completing my undergraduate studies in commerce, followed by
                        graduate studies in applied information technology. I embarked on a path focused on application development
                        within the financial services industry. Over time, my trajectory expanded to encompass machine learning.
                    </p>
                    <p>My expertise in Python Machine Learning, and other technologies, coupled with my strong analytical and
                        problem-solving skills, enabled me to lead comprehensive analysis, design system specifications, and develop
                        advanced functionalities for various applications. I have successfully integrated middleware, REST APIs, and web
                        front ends, ensuring seamless communication and optimal user experiences.</p>
                    <p>In addition to my technical expertise, I possess strong leadership skills. I have managed the development aspects
                        of projects, from ideation to completion. I am adept at delivering projects on time and within budget.</p>
                    <p>My educational background includes a Postgraduate Diploma in Applied Information Technology and a Bachelor's
                        Degree in Commerce with a specialization in Finance. These qualifications have provided me with a solid
                        foundation in both technical and business domains, allowing me to bridge the gap between IT and organizational
                        objectives effectively.</p>
                    <p>In my pursuit of excellence, I am seeking like-minded individuals with whom I can achieve great things. I am
                        eager to collaborate with organizations that share my drive and vision. Additionally, I am actively seeking
                        opportunities to further develop my skills and expand my knowledge in these domains. Ultimately, my aim is to
                        leave a positive impact on this world, making it better than I found it. If you have the capacity to assist me
                        in any of these endeavors, I sincerely look forward to hearing from you and the possibility of creating
                        something truly remarkable together.</p>
                </div>
                )
        } else if (contact.jobType === "Website Development") {
            return (
                <div>
                    <p>As an individual, my driving passion lies in utilizing information technology to creatively solve business
                        problems. My journey towards this goal began in 1998 after completing my undergraduate studies in commerce,
                        followed by graduate studies in applied information technology. I embarked on a path focused on application
                        development within the financial services industry.</p>
                    <p>I have an extensive track record of delivering innovative solutions and driving successful projects throughout my
                        career. As a Senior Application Developer, I led the development of several groundbreaking products that
                        significantly contributed to the success of Rocket Mortgage, State Street, Sun Life, and other esteemed
                        organizations. One notable accomplishment was the creation of the Enhanced Non-delegated Correspondent Lending
                        Channel, which bridged the gap between wholesale lending and traditional non-delegated correspondent lending.
                        This product's successful launch in all 50 states propelled Rocket Mortgage's financial performance.</p>
                    <p>My expertise in application development coupled with my strong analytical and problem-solving skills, enabled me
                        to lead comprehensive analysis, design system specifications, and develop advanced functionalities for various
                        applications. I have successfully integrated middleware, REST APIs, and web front ends, ensuring seamless
                        communication and optimal user experiences.</p>
                    <p>Throughout my career, I have consistently demonstrated my ability to navigate complex legacy systems, integrate
                        third-party solutions, and comply with industry-specific regulations. For instance, at Bank of Montreal, I
                        oversaw the integration of Norkom's advanced anti-money laundering solution across multiple banking divisions,
                        streamlining transaction monitoring and enhancing compliance. I effectively collaborated with vendors, managed
                        project timelines, and ensured successful implementation.</p>
                    <p>In addition to my technical expertise, I possess strong leadership skills. I have managed the development aspects
                        of projects, from ideation to completion. I am adept at delivering projects on time and within budget.</p>
                    <p>My educational background includes a Postgraduate Diploma in Applied Information Technology and a Bachelor's
                        Degree in Commerce with a specialization in Finance. These qualifications have provided me with a solid
                        foundation in both technical and business domains, allowing me to bridge the gap between IT and organizational
                        objectives effectively.</p>
                    <p>In my pursuit of excellence, I am seeking like-minded individuals with whom I can achieve great things. I am
                        eager to collaborate with organizations that share my drive and vision. Additionally, I am actively seeking
                        opportunities to further develop my skills and expand my knowledge in these domains. Ultimately, my aim is to
                        leave a positive impact on this world, making it better than I found it. If you have the capacity to assist me
                        in any of these endeavors, I sincerely look forward to hearing from you and the possibility of creating
                        something truly remarkable together.</p>
                </div>
            )
        }
    };

    const getAmerican = () => {
        if (contact.country === "United States") {
            return (
                <p>I am a registered Canadian corporation, which makes me eligible to work in the United States with a W-8BEN-E
                    form. Additionally, I am a member of the TopTal network, providing you with the option to engage with an
                    American entity for billing purposes if that is your preference.</p>
            )
        }
    };

    const getResume = () => {

        let resume = "";

        if (contact.jobType === "Progress OpenEdge 4GL/ABL Application Development") {
            resume = "FrankLobeOE.pdf";
        } else if (contact.jobType === "Machine Learning Engineering") {
            resume = "FrankLobeOE.pdf";
        } else if (contact.jobType === "Website Development") {
            resume = "FrankLobeOE.pdf";
        }

        return (
            <div>
                <p>
                    <a className="lead text-secondary" href={`/documents/${resume}`} target="_blank" rel="noopener noreferrer">
                        My Resume
                    </a>
                </p>
            </div>
        )
    };

    return (
        <div>
            <Header PageName="Contact" />
            <Container className="p-5 shadow-lg">
                <Row>
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <article>
                            <p className="mb-1">Frank Lobe</p>
                            <p className="mb-1">27 Kidbrooke Crescent</p>
                            <p className="mb-1">Toronto, Ontario, M1M 3E4</p>
                            <p className="mb-1">Email: frank.lobe@gmail.com</p>
                            <p className="mb-1">Mobile: +1 (647) 220-5623</p>
                            <p className="mb-5">{formattedDate}</p>
                            <p className="mb-1">{contact.firstName} {contact.lastName}</p>
                            <p className="mb-1">{contact.title}</p>
                            <p className="mb-1">{contact.companyName}</p>
                            <p className="mb-1">{contact.companyAddress}</p>
                            {getCityProvince()}
                            <p className="mb-5">{contact.postal_code} {contact.country}</p>
                            <p className="mb-5">Dear {contact.firstName},</p>
                            <p>Please allow me to express my interest in the {contact.positionTitle} position at {contact.companyName}.
                                With a strong background in application development, and solution architecture, I believe that my skills and
                                experience make me a perfect fit for this role.</p>
                            {getBody()}
                            <p>I am excited about the opportunity to join {contact.company_name} and contribute to its continued success. I am
                                confident that my technical expertise, leadership skills, and passion for delivering innovative solutions align
                                perfectly
                                with the requirements of the {contact.position_title} position.</p>
                            <p>Thank you for considering my application. I have attached my resume for your review, which provides more detailed
                                information about my experience and accomplishments. I would welcome the opportunity to discuss how my skills
                                and qualifications can benefit {contact.company_name}. Please feel free to contact me at your convenience to
                                arrange an
                                interview.</p>
                            {getAmerican()}
                            <p className="mb-5">Thank you for your time and consideration.</p>
                            <p className="mb-5">Sincerely,</p>
                            <p className="mb-5">Frank Lobe</p>
                            {getResume()}
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default CoverLetter;