import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import { scrapeCall } from "./tools/ajax";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "view-articles",
      scrapedArticles: []
    };

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    scrapeCall()
      .then(response => {
        this.setState({
          view: "scrape-articles",
          scrapedArticles: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <AppHeader view={this.state.view} switchHandler={this.handleSwitch} />
      </div>
    );
  }
}

export default App;
