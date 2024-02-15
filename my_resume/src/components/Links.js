import { Col, Image, Row } from "react-bootstrap";

const Links = () => {
    return (
        <Row className="align-middle">
            <Col className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://www.linkedin.com/in/franklobe/">
                    <Image className="mt-3" alt="LinkedIn" src="/images/LinkedIn.png" fluid />
                </a>
            </Col>
            <Col className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://www.kaggle.com/franklobe">
                    <Image className="mt-3" alt="Kaggle" src="/images/Kaggle.png" fluid />
                </a>
            </Col>
            <Col className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://github.com/FrankLobe/">
                    <Image className="mt-3" alt="GitHub" src="/images/Github.png" fluid />
                </a>
            </Col>
        </Row>
    );
}

export default Links;