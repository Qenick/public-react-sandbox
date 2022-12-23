import React, {Component} from "react";
import './App.css';
import ClockClass from "./ClockClass";
import ClockFunction from "./ClockFunction";

class App extends Component {
  render() {
    return (
      <div>
        <ClockClass />
        <ClockFunction />
      </div>
    );
  }
}

export default App;
