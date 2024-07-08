import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../css/contact.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Contact Us</h2>
                        <ul className="list-unstyled">
                            <li> 7687545343</li>
                            <li><FaEnvelope /> bookishblish@gmail.com</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h2>Follow Us</h2>
                        <div className="social-icons">
                            <a href="#facebook"><FaFacebook /></a>
                            <a href="#twitter"><FaTwitter /></a>
                            <a href="#linkedin"><FaLinkedin /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;
