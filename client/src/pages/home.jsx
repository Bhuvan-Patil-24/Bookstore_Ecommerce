import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import '../Css/Home.css';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => console.error('Error fetching books:', error));

        // Mock data for the carousel
        setCarouselItems([
            {
                src: 'https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/08090727/1200x628_-Backlist_Poetry.jpg',
                caption: 'Poetry Books',
                description: 'Collections of love, death, grief, and oppression'
            },
            {
                src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Favnishanand-49235.medium.com%2Fwhy-do-i-love-sports-so-much-63c37b519cb5&psig=AOvVaw11Mld2e_N-9lPyuOdLuhbA&ust=1720424123075000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj54rm1lIcDFQAAAAAdAAAAABAJ',
                caption: 'Sport Books',
                description: 'There is no more exciting sport than flying, for if you lose, you die.'
            },
            {
                src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftime.com%2F6341840%2Fbest-fiction-books-2023%2F&psig=AOvVaw0junjLDewlajIpdk_2GZSr&ust=1720424234800000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND-t_O1lIcDFQAAAAAdAAAAABAE',
                caption: 'Fiction Books',
                description: 'Fiction is the truth inside the lie.'
            }
        ]);
    }, []);

    return (
        <div className="home-page">
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.caption}
                        />
                        <Carousel.Caption>
                            <h5>{item.caption}</h5>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container>
                <h2 className="my-4">Featured Books</h2>
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
        </div>
    );
};

export default HomePage;
