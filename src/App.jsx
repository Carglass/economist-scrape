import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { scrapeCall, saveArticleCall, loadArticlesCall, upVoteArticleCall } from "./tools/ajax";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "view-articles",
      scrapedArticles: [],
      articles: []
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }

  handleSwitch() {
    if (this.state.view === "view-articles") {
      scrapeCall()
        .then(response => {
          this.setState({
            view: "scrape-articles",
            scrapedArticles: response.data
          });
          console.log(this.state.scrapedArticles);
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

  saveArticle(article) {
    let articlesCopy = this.state.articles.slice();
    saveArticleCall(article)
      .then(data => {
        articlesCopy.push(data.data);
        this.setState({ articles: articlesCopy });
      })
      .catch(err => console.log(err));
  }

  upVoteArticle(id) {
    upVoteArticleCall().then();
  }

  componentDidMount() {
    loadArticlesCall().then(values => {
      console.log(values.data);
      this.setState({ articles: values.data });
      console.log(this.state.articles);
      console.log(this.state.articles[0].title);
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader view={this.state.view} switchHandler={this.handleSwitch} />
        <AppMain
          view={this.state.view}
          scrapeArticles={this.state.scrapedArticles}
          saveArticle={this.saveArticle}
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default App;
