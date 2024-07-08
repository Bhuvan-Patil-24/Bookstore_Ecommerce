import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import BooksPage from './Pages/Books.jsx';
import ContactPage from './Pages/Contact.jsx';
import LoginPage from './Pages/UserLogin.jsx';
import AboutPage from './Pages/About.jsx';
import NavigationBar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
            <div className="d-flex flex-column min-vh-100">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
    );
};

export default App;