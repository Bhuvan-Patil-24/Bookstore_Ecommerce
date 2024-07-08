import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Css/AdminLogin.css';
import AuthContext from '../Context/AuthContext.jsx';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5500/api/user/admin-login', { email, password })
      .then(response => {
        console.log('Admin login successful:', response.data);
        toast.success("Admin login successful");
        login(response.data.token);
        navigate("/");
      })
      .catch(error => {
        console.error('Error logging in:', error);
        toast.error("Error logging in!");
      });
  };

  return (
    <Container className="admin-login-page">
      <h2 className="text-center mb-4">Admin Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
      <div className="options mt-4">
        <Link to="/login" className="option-link">User Login</Link>
        <Link to="/signup" className="option-link">Sign Up</Link>
      </div>
    </Container>
  );
};

export default AdminLoginPage;
