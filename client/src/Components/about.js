import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Container>
        <h1 className="text-center mb-4">About Us</h1>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F749427194235560254%2F&psig=AOvVaw2tCtTerWv6zBF4lPEfZ6jn&ust=1720428182534000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICs9MfElIcDFQAAAAAdAAAAABAh" rounded fluid />
          </Col>
          <Col md={6}>
            <p>
              Welcome to our bookstore! Established in 2024, we have grown from a small local shop to an international online platform. Our mission is to provide a vast collection of books to readers all around the world, ensuring that everyone has access to the literature they love. We pride ourselves on our wide selection of books and excellent customer service.
            </p>
            <p>
              Our vision is to create a world where books are easily accessible to everyone, fostering a love for reading and lifelong learning. Join us in our journey and explore our diverse range of books, from bestsellers to hidden gems.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
