import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';

import {
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Link is what you use instead of an anchor! */}
      <Link to="/">Home</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/about">About</Link>
      {/* <Home /> */}
      <Route exact path="/" component={Home} />
      {/* <About /> */}
      <Route path="/cats" component={Cats} />
      {/* <Cats /> */}
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
