import Navigation from "./Navigation";
import Photo from "./Photo";
import Address from "./Address";
import Links from "./Links";

import { Col, Row } from 'react-bootstrap';

const Header = ({ PageName }) => {
    return (
        <div className="jumbotron">
            <header>
                <Navigation PageName={PageName} />
                <Row>
                    <Col className="col-xl-2 col-lg-3 col-md-4 col-sm-12 text-left">
                        <Photo />
                    </Col>
                    <Col className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
                        <Address />
                        <hr />
                        <Links />
                    </Col>
                </Row>
            </header>
        </div>
    );
}

export default Header;
