import React, { Component } from "react";
import { getUser, getEmojis } from "../api/github";
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
    emojis: {},
  };

  componentDidMount() {
    getUser('merio901').then(data => {
      this.setState({ user: data.data });
    });
    getEmojis().then(data => {
      this.setState({ emojis: data.data });
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
    const { user, emojis, images } = this.state;
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {// Loop over the object keys and render each key
          Object.keys(user).map(key => renderLine(user, key))}
        </ul>
        <ul style={{ listStyle: "none" }}>
          {// Loop over the object keys and render each key
          Object.keys(emojis).map(key => renderLine(emojis, key))}
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
