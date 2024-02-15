import { Col, Row } from 'react-bootstrap';
import { BsTelephone, BsEnvelope } from "react-icons/bs";

const Address = () => {
    return (
        <address>
            <Row>
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-lg-left text-md-left text-sm-left text-xl-left">
                    <p className="display-4">
                        Frank Lobe
                    </p>
                    <p className="lead">
                        Senior Application Developer & Architect<br />
                    </p>
                    <p className="lead">
                        Creative technology solutions to complex business problems
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Row className="mb-3">
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-left">
                            <BsTelephone className="m-2" />+1 (647) 220-5623
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-left">
                            <BsEnvelope className="m-2" />frank.lobe@gmail.com
                        </Col>
                    </Row>
                </Col>
            </Row>
        </address>
    );
}

export default Address;