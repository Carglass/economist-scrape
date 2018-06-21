import React from "react";

function ScrapeArticle(props) {
  return (
    <div className="scrape-article">
      <a href={props.article[1]}>{props.article[0]}</a>
      <button
        onClick={() => {
          props.saveArticle(props.article);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default ScrapeArticle;
