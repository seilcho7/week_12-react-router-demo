import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import Cat from './Cat';
import PageNotFound from './PageNotFound';
import Header from './Header';

import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// What is bind?
// -it's a way to make sure a method knows who 'this' is

// Why do I bind?
// When do I need bind?

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // I *definitely* have access to the instance
    // I will use .bind to "lock in" the value of 'this'
    this._incrementCount = this._incrementCount.bind(this);
    // Functions are 'callable' objects
    // As an object, they can have methods
    // One of their methods is .bind
    // .bind returns a new copy of the function, with the value of 'this' locked in
  }

  componentDidMount() {
    // Earlier, alternative syntax did not give you a copy of the function, it ran the function
    // this._incrementCount.apply(this, [1234]);
    // this._incrementCount.call(this, 999);
  }

  render() {
    return (
      <div className="App">
        <Header />

        <h1>{this.state.counter}</h1>
        <button onClick={this._incrementCount}>Increment</button>
        <br />
        {/* Link is what you use instead of an anchor! */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/cats">Cats</Link>
        <br />
        {/* anchor tags only work locally, not on aws (because it makes the browser send a new request */}
        {/* <a href="/cats">Cat's please</a> */}
        <Link to="/about">About</Link>
        <Switch>
          {/* <Home /> */}
          {/* Switch shows the first matching Route or the last Route listed */}
          <Route exact path="/" component={Home} />
          {/* <About /> */}
          <Route path="/cats" component={Cats} />
          
          {/* <Cats /> */}
          <Route path="/about" component={About} />

          {/* When not using <Switch>, you an use a wildcard */}
          {/* <Route path="/* /" component={PageNotFound} /> */}
          <Route component={PageNotFound} />
        </Switch>
        <Route path="/cats/:cat" component={Cat} />

      </div>
    );
  }
  // "normal method"
  _incrementCount() {
    console.log('App: _incrementCount get called');
    console.log(this);
    // debugger;
    this.setState({
      counter: this.state.counter + 1
    })
  }

  _incrementCountUsingArrow = () => {
    console.log('App: _incrementCountUsingArrow get called');
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;
