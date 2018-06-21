import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "view-articles"
    };
  }

  render() {
    return (
      <div className="App">
        <AppHeader view={this.state.view} />
      </div>
    );
  }
}

export default App;
