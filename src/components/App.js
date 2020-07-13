import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?per_page=5").then(
      // onFullfilment handler - gets executed when promise is resolved
      (res) => {
        return Promise.reject("error").then((data) => console.log(data));
      },
      // onRejected handler - gets executed when promise is rejected
      (err) => {
        console.error(err);
      }
    );
  }

  render() {
    return <div>hello</div>;
  }
}

export default App;
