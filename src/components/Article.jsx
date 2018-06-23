import React from "react";
import NewComment from "./NewComment";
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
      <div className="comments">
        {props.article.comments.map(comment => {
          return (
            <div>
              <div className="comment-title">{comment.title}</div>
              <div className="comment-content">{comment.content}</div>
            </div>
          );
        })}
      </div>
      <div className="new-comment">
        <NewComment
          postArticleComment={props.postArticleComment}
          articleId={props.article._id}
        />
      </div>
    </div>
  );
}

export default Article;
