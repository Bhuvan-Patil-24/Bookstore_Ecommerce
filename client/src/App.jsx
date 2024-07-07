import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home.jsx';
import BooksPage from './components/book.jsx';
import ContactPage from './components/contact.jsx';
import LoginPage from './components/login.jsx';
import AboutPage from './components/about.jsx';
import NavigationBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/books" component={BooksPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
