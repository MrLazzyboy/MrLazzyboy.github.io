import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Devices from './components/Devices/Devices';
import Home from './components/Home/Home';
import Solutions from './components/Solutions/Solutions';
import CustomeNavBar from "./components/CustomeNavBar/CustomeNavBar";
import Device from "./components/RandomDevice/RandomDevice";
import Solution from "./components/RandomSolution/RandomSolution";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomeNavBar/>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/devices" component={Devices} />
          <Route path="/device" component={Device} />
          <Route path="/solution" component={Solution} />
        </div>
      </Router>
    );
  }
}

export default App;
