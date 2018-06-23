import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Article(props) {
  return (
    <div className="scrape-article">
      <div className="article-title">
        <a href={props.article.link}>{props.article.title}</a>
      </div>
      <div
        className="icon"
        onClick={() => {
          props.upVoteArticle(props.article._id);
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>{props.article.upvotes.toString()}</span>
      </div>
      <div
        className="icon"
        onClick={() => {
          props.downVoteArticle(props.article._id);
        }}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
        <span>{props.article.downvotes.toString()}</span>
      </div>
    </div>
  );
}

export default Article;
