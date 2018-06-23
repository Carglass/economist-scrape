import React from "react";
import NewComment from "./NewComment";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { ThumbUp, ThumbDown } from "@material-ui/icons";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4
  })
});

function Article(props) {
  const { classes } = props;

  return (
    <div className="scrape-article">
      <Paper className={classes.root}>
        <Grid container spacing={24} alignItems={"center"}>
          <Grid item>
            <Typography variant={"headline"}>
              <a
                href={props.article.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {props.article.title}
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <div className="icon">
              <IconButton
                onClick={() => {
                  props.upVoteArticle(props.article._id);
                }}
              >
                <ThumbUp />{" "}
              </IconButton>
              <span>
                {"  "}
                {props.article.upvotes.toString()}
              </span>
            </div>
          </Grid>
          <Grid item>
            <div className="icon">
              <IconButton
                onClick={() => {
                  props.downVoteArticle(props.article._id);
                }}
              >
                <ThumbDown />{" "}
              </IconButton>
              <span>
                {"  "}
                {props.article.downvotes.toString()}
              </span>
            </div>
          </Grid>
        </Grid>
        <Grid container direction={"column"}>
          <Grid item>
            {props.article.comments.map(comment => {
              return (
                <Grid container direction={"column"} spacing={24}>
                  <Grid item>
                    <Typography variant={"subheading"}>
                      {comment.title}
                    </Typography>
                    <Typography className="comment-content">
                      {comment.content}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid item>
            <NewComment
              postArticleComment={props.postArticleComment}
              articleId={props.article._id}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Article);
