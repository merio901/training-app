import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div>Hello World!!! {this.state.counter}</div>
        </div>
        <button onClick={this.increment}>+1</button>
      </React.Fragment>
    );
  }
}

export default App;
