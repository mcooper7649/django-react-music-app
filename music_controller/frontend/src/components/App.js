import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We will add our data here
    };
  }

  componentDidMount() {
    // We will add our code here
  }

  render() {
    return <h1>Testing React Code!</h1>;
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
