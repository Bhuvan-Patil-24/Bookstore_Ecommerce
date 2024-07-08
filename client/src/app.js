import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home.js';
import BooksPage from './components/book.js';
import ContactPage from './components/contact.js';
import LoginPage from './components/login.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/books" component={BooksPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
