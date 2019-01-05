import React, { Component } from "react";
import { getUser } from "../api/github";
import { searchPhotos } from "../api/unsplash";

const renderLine = (user, key) => (
  <li key={key}>
    <b>{key}</b>: {user[key]}
  </li>
);

const renderImage = element => (
  <img key={element.id} alt="XD" src={element.urls.small} />
);
class App extends Component {
  state = {
    user: {},
    images: [],
  };

  componentDidMount() {
    getUser("merio901").then(data => {
      this.setState({ user: data.data });
    });
    searchPhotos("kitty").then(data => {
      this.setState({
        images: data,
      });
    });
  }

  fetchPhotos = e => {
    e.preventDefault();
    searchPhotos("balls").then(data => {
      this.setState({
        images: data,
      });
    });
  };
  render() {
    const { user, images } = this.state;
    console.log(this.state);
    console.log(Object.keys(user));
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {// Loop over the object keys and render each key
          Object.keys(user).map(key => renderLine(user, key))}
        </ul>
        <form>
          <input type="text" />
          <button onClick={e => this.fetchPhotos(e)}>Get photos!</button>
        </form>
        <ul style={{ listStyle: "none" }}>{images.map(e => renderImage(e))}</ul>
      </div>
    );
  }
}

export default App;
