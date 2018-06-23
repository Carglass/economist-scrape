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
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

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
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <AppHeader
              view={this.state.view}
              switchHandler={this.handleSwitch}
            />
            <AppMain
              view={this.state.view}
              scrapeArticles={this.state.scrapedArticles}
              saveArticle={this.saveArticle}
              articles={this.state.articles}
              upVoteArticle={this.upVoteArticle}
              downVoteArticle={this.downVoteArticle}
              postArticleComment={this.postArticleComment}
            />
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
