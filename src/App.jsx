import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import {
  scrapeCall,
  saveArticleCall,
  loadArticlesCall,
  upVoteArticleCall,
  downVoteArticleCall,
  postArticleCommentCall
} from "./tools/ajax";
import { fromJS } from "immutable";

const findIndexById = (array, id) => {
  for (var index in array) {
    if (array[index]._id === id) {
      return index;
    }
  }
  return false;
};

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
    this.upVoteArticle = this.upVoteArticle.bind(this);
    this.downVoteArticle = this.downVoteArticle.bind(this);
    this.postArticleComment = this.postArticleComment.bind(this);
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
    upVoteArticleCall(id).then(data => {
      let index = findIndexById(this.state.articles, data.data._id);
      let arrayToModify = fromJS(this.state.articles);
      let arrayModified = arrayToModify.set(index, data.data);
      this.setState({ articles: arrayModified.toJS() });
    });
  }

  downVoteArticle(id) {
    downVoteArticleCall(id).then(data => {
      let index = findIndexById(this.state.articles, data.data._id);
      let arrayToModify = fromJS(this.state.articles);
      let arrayModified = arrayToModify.set(index, data.data);
      this.setState({ articles: arrayModified.toJS() });
    });
  }

  postArticleComment(id, comment) {
    postArticleCommentCall(id, comment).then(data => {
      console.log(data);
      let index = findIndexById(this.state.articles, data.data._id);
      let arrayToModify = fromJS(this.state.articles);
      let arrayModified = arrayToModify.set(index, data.data);
      this.setState({ articles: arrayModified.toJS() });
    });
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
          upVoteArticle={this.upVoteArticle}
          downVoteArticle={this.downVoteArticle}
          postArticleComment={this.postArticleComment}
        />
      </div>
    );
  }
}

export default App;
