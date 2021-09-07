import React from 'react';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router basename="/">
        <Route exact path="/">
          <Aboutme />
        </Route>
        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Router>
      <Footer />
    </div>

  );

}

export default App;
