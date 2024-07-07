import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/books.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <Container>
      <div>welcome</div>
      <h2 className="my-4">All Books</h2>
      <Row>
        {books.map((book, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.imageUrl} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BooksPage;
