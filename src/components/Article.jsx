import React from "react";

function Article(props) {
  return (
    <div className="scrape-article">
      <a href={props.article.link}>{props.article.title}</a>
    </div>
  );
}

export default Article;
