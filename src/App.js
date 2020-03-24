import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'

function App() {

  return (
    <Router>
      <Navbar/>
      <article className="container">
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </article>
    </Router>
  );
}

export default App;
