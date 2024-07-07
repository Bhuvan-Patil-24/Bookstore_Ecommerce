// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import BookList from './components/BookList.js';
import Cart from './components/cart.js';

function App() {
  // Simulated cart items (replace with actual state management)
  const cartItems = [];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BookList />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
