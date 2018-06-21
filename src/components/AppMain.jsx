import React from "react";
import ScrapeArticleList from "./ScrapeArticleList";

function AppMain(props) {
  if (props.view === "view-articles") {
    return <div> View Articles </div>;
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
