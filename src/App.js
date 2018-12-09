import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (
      <div className="App">
        <div>Hello World!!!</div>
      </div>
    );
  }
}

export default App;
