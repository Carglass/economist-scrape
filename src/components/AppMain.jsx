import React from "react";
import ScrapeArticleList from "./ScrapeArticleList";
import ArticleList from "./ArticleList";

function AppMain(props) {
  if (props.view === "view-articles") {
    return (
      <ArticleList
        articles={props.articles}
        upVoteArticle={props.upVoteArticle}
        downVoteArticle={props.downVoteArticle}
        postArticleComment={props.postArticleComment}
      />
    );
  } else if (props.view === "scrape-articles") {
    return (
      <ScrapeArticleList
        scrapeArticles={props.scrapeArticles}
        saveArticle={props.saveArticle}
      />
    );
  }
}

export default AppMain;
