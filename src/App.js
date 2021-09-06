import React from 'react';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path = "/">
          <Aboutme />
        </Route>
        <Route exact path = "#aboutme">
          <Aboutme />
        </Route>
        {/* <Route exact path = "/">
          <Aboutme />
        </Route>
        <Route exact path = "/">
          <Aboutme /> */}
        {/* </Route> */}
      </Router>
      <Footer/>
    </div>

  );
  
}

export default App;
