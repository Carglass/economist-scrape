import React from "react";
import ScrapeArticle from "./ScrapeArticle";

function ScrapeArticleList(props) {
  return (
    <main className="scrape-articles">
      {props.scrapeArticles.map(article => {
        return <ScrapeArticle key={article[0]} article={article} saveArticle={props.saveArticle}/>;
      })}
    </main>
  );
}

export default ScrapeArticleList;
