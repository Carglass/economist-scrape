import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { upVoteArticle } from "./../tools/ajax.js";

function Article(props) {
  return (
    <div className="scrape-article">
      <div className="article-title">
        <a href={props.article.link}>{props.article.title}</a>
      </div>
      <div
        className="icon"
        onClick={() => {
          upVoteArticle(props.article._id).then(data => console.log(data));
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>{props.article.upvotes.toString()}</span>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faThumbsDown} />
        <span>{props.article.downvotes.toString()}</span>
      </div>
    </div>
  );
}

export default Article;
