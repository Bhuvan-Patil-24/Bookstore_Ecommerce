import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import '../css/footer.css';

const Footer = () => {
  // Function to send a sample request to the backend
  const sendRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5500/sample'); // Replace with your actual backend endpoint
      console.log('Backend Response:', response.data); // Logging the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="footer-left">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaPhone /> 7687545343
              </li>
              <li>
                <FaEnvelope /> bookishblish@gmail.com
              </li>
            </ul>
            <h5>Terms and Policy</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#terms" className="text-white">Terms & Service</a>
              </li>
              <li>
                <a href="#policy" className="text-white">Privacy Policy</a>
              </li>
            </ul>
            <div className="social-icons">
              <a href="#facebook" className="text-white"><FaFacebook /></a>
              <a href="#twitter" className="text-white"><FaTwitter /></a>
              <a href="#linkedin" className="text-white"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={6} className="text-md-right footer-right">
            <h5>bookishblish</h5>
            <p>&copy; {new Date().getFullYear()} Bookish Bliss. All rights reserved.</p>
            <button onClick={sendRequest}>Send Request to Backend</button> {/* Example button to trigger backend request */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

