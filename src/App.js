import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Devices from './components/Devices/Devices';
import Home from './components/Home/Home';
import Solutions from './components/Solutions/Solutions';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/devices" component={Devices} />
        </div>
      </Router>
    );
  }
}

export default App;
