import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import BooksPage from './pages/book.jsx';
import ContactPage from './pages/contact.jsx';
import LoginPage from './pages/login.jsx';
import AboutPage from './pages/about.jsx';
import NavigationBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
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
