import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
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
    if (this.state.view === "view-articles") {
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
    } else if (this.state.view === "scrape-articles") {
      this.setState({
        view: "view-articles",
        scrapedArticles: []
      });
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader view={this.state.view} switchHandler={this.handleSwitch} />
        <AppMain view={this.state.view} />
      </div>
    );
  }
}

export default App;
