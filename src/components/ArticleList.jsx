import React from "react";
import Article from "./Article";

function ArticleList(props) {
  return (
    <main className="articles">
      {props.articles.map(article => {
        return <Article key={article.title} article={article} />;
      })}
    </main>
  );
}

export default ArticleList;
