import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Header from "../components/Header";

function Contact() {

    document.title = "Frank Lobe - Contact";

    const navigate = useNavigate();

    const [errorMessages, setErrorMessages] = useState([]);
    
    const [city, setCity] = useState('');
    const cityChange = (event) => {
        setCity(event.target.value);
    }

    const [companyAddress, setCompanyAddress] = useState('');
    const companyAddressChange = (event) => {
        setCompanyAddress(event.target.value);
    }
    
    const [companyName, setCompanyName] = useState('');
    const companyNameChange = (event) => {
        setCompanyName(event.target.value);
    }

    const [companyWebsite, setCompanyWebsite] = useState('');
    const companyWebsiteChange = (event) => {
        setCompanyWebsite(event.target.value);
    }

    const [country, setCountry] = useState('Canada');
    const countryChange = (event) => {
        setCountry(event.target.value);

        if (event.target.value === "Canada") {
            setProvinceLabel("Province");
            setPostalCodeLabel("Postal Code");
        } else if (event.target.value === "United States") {
            setProvinceLabel("State");
            setPostalCodeLabel("ZIP Code");
        }
    }

    const [emailAddress, setEmailAddress] = useState('');
    const emailAddressChange = (event) => {
        setEmailAddress(event.target.value);
    }

    const [firstName, setFirstName] = useState('');
    const firstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const [jobPosting, setJobPosting] = useState('');
    const jobPostingChange = (event) => {
        setJobPosting(event.target.value);
    }

    const [jobType, setJobType] = useState('Progress OpenEdge 4GL/ABL Application Development');
    const jobTypeChange = (event) => {
        setJobType(event.target.value);
    }

    const [lastName, setLastName] = useState('');
    const lastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const [onlineProfile, setOnlineProfile] = useState('');
    const onlineProfileChange = (event) => {
        setOnlineProfile(event.target.value);
    }

    const [positionTitle, setPositionTitle] = useState('');
    const positionTitleChange = (event) => {
        setPositionTitle(event.target.value);
    }

    const [postalCode, setPostalCode] = useState('');
    const postalCodeChange = (event) => {
        setPostalCode(event.target.value);
    }
    const [postalCodeLabel, setPostalCodeLabel] = useState('Postal Code');

    const [province, setProvince] = useState('');
    const provinceChange = (event) => {
        setProvince(event.target.value);
    }
    const [provinceLabel, setProvinceLabel] = useState('Province');

    const [telephoneNumber, setTelephoneNumber] = useState('');
    const telephoneNumberChange = (event) => {
        setTelephoneNumber(event.target.value);
    }

    const [title, setTitle] = useState('');
    const titleChange = (event) => {
        setTitle(event.target.value);
    }

    const submitContact = async (event) => {
        
        event.preventDefault();

        const contactData = {
            "city" : city,
            "companyAddress" : companyAddress,
            "companyName" : companyName,
            "companyWebsite" : companyWebsite,
            "country" : country,
            "emailAddress" : emailAddress,
            "firstName": firstName,
            "jobPosting": jobPosting,
            "jobType": jobType,
            "lastName": lastName,
            "onlineProfile": onlineProfile,
            "positionTitle" : positionTitle,
            "postalCode" : postalCode,
            "province" : province,
            "telephoneNumber": telephoneNumber,
            "title": title,
        };

        let errorMessages = [];

        if (firstName === "") {
            errorMessages.push("First name  is a required value.");
        }

        if (companyName === "") {
            errorMessages.push('Company name is a required value.');
        };
    
        if (emailAddress === "" && telephoneNumber === "") {
            errorMessages.push('Email address or telephone number is a required value.');
        };

        if (errorMessages.length !== 0) {
            setErrorMessages(errorMessages);
        } 
        else {
            try {
                const response = await axios.post('http://127.0.0.1:8000/contact', {
                    contact: contactData 
                });
        
                if (response.status !== 200) {
                    throw new Error('Failed to get response');
                }
                
                errorMessages = response.data.errorMessages;
                
                const contact = response.data.contact;
                
                localStorage.setItem('contact', JSON.stringify(contact));

                if (response.data.status === 'Error') {
                    setErrorMessages(errorMessages);
                    setCity(contact.city);
                    setCompanyAddress(contact.companyAddress);
                    setCompanyName(contact.companyName);
                    setCompanyWebsite(contact.companyWebsite);
                    setCountry(contact.country);
                    setEmailAddress(contact.emailAddress);
                    setFirstName(contact.firstName);
                    setJobPosting(contact.jobPosting);
                    setJobType(contact.jobType);
                    setLastName(contact.lastName);
                    setOnlineProfile(contact.onlineProfile);
                    setPositionTitle(contact.positionTitle);
                    setPostalCode(contact.postalCode);
                    setProvince(contact.province);
                    setTelephoneNumber(contact.telephoneNumber);
                    setTitle(contact.title);
                }
                else {
                    setErrorMessages([]);
                    setCity("");
                    setCompanyAddress("");
                    setCompanyName("");
                    setCompanyWebsite("");
                    setCountry("");
                    setEmailAddress("");
                    setFirstName("");
                    setJobPosting("");
                    setJobType("");
                    setLastName("");
                    setOnlineProfile("");
                    setPositionTitle("");
                    setPostalCode("");
                    setProvince("");
                    setTelephoneNumber("");
                    setTitle("");

                    navigate("/CoverLetter");
                }
            } catch (error) {
                console.error("Error posting contact:", error);
            }
        }
    };    

    return (<div>
                <Header PageName="Contact" />
                <Container className="p-5 shadow-lg">
                    <Row>
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Form noValidate validated="false" onSubmit={submitContact}>
                                <div id="errors">
                                    {errorMessages.map((errorMessage, index) => (
                                            <p key={index} className="alert alert-danger mb-2">{errorMessage}</p>
                                        ))}
                                </div>
                                <section>
                                    <h4>Contact Information</h4>
                                    <Container className="p-5 my-5 border">
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="first_name">First Name</Form.Label>
                                                    <Form.Control required name="first_name" type="text" value={firstName} onChange={firstNameChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="last_name">Last Name</Form.Label>
                                                    <Form.Control name="last_name" type="text" value={lastName} onChange={lastNameChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="title">Title</Form.Label>
                                                    <Form.Control name="title" type="text" value={title} onChange={titleChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="online_profile">Online Profile</Form.Label>
                                                    <Form.Control name="online_profile" type="url" value={onlineProfile} onChange={onlineProfileChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="email_address">Email Address</Form.Label>
                                                    <Form.Control required name="email_address" type="email" value={emailAddress} onChange={emailAddressChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="telephone_number">Telephone Number</Form.Label>
                                                    <Form.Control required name="telephone_number" type="tel" value={telephoneNumber} onChange={telephoneNumberChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>                                    
                                </section>
                                <section>
                                    <h4>Company Information</h4>
                                    <Container className="p-5 my-5 border">
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="company_name">Company Name</Form.Label>
                                                    <Form.Control required name="company_name" type="text" value={companyName} onChange={companyNameChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="company_website">Company Website</Form.Label>
                                                    <Form.Control name="company_website" type="text" value={companyWebsite} onChange={companyWebsiteChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="company_address">Company Address</Form.Label>
                                                    <Form.Control name="company_address" type="text" value={companyAddress} onChange={companyAddressChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="city">City</Form.Label>
                                                    <Form.Control name="city" type="text" value={city} onChange={cityChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="province">{provinceLabel}</Form.Label>
                                                    <Form.Control name="province" type="text" value={province} onChange={provinceChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="postal_code">{postalCodeLabel}</Form.Label>
                                                    <Form.Control name="postal_code" type="text" value={postalCode} onChange={postalCodeChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="country">Country</Form.Label>
                                                    <Form.Select id="country" name="country" value={country} onChange={countryChange}>
                                                        <option>Canada</option>
                                                        <option>United States</option>
                                                    </Form.Select>                                                    
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>                                    
                                </section>
                                <section>
                                    <h4>Job Information</h4>
                                    <Container className="p-5 my-5 border">
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="position_title">Position Title</Form.Label>
                                                    <Form.Control name="position_title" type="text" value={positionTitle} onChange={positionTitleChange} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="job_posting">Job Posting URL</Form.Label>
                                                    <Form.Control name="job_posting" type="text" value={jobPosting} onChange={jobPostingChange} />
                                                </div>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="mb-3">                                                    
                                                    <Form.Label htmlFor="job_type">Job Type</Form.Label>
                                                    <Form.Select id="job_type" name="job_type" value={jobType} onChange={jobTypeChange}>
                                                        <option>Progress OpenEdge 4GL/ABL Application Development</option>
                                                        <option>Machine Learning Engineering</option>
                                                        <option>Website Development</option>
                                                    </Form.Select>                                                    
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>                                    
                                </section>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>);
}

export default Contact;