import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button, Grid } from "@material-ui/core";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3
  })
});

function ScrapeArticle(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <Grid container justify={"space-between"}>
          <Grid item>
            <a
              href={props.article[1]}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant={"headline"}>{props.article[0]}</Typography>
            </a>
          </Grid>
          <Grid item>
            <Button
              color={"secondary"}
              onClick={() => {
                props.saveArticle(props.article);
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ScrapeArticle);
