import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Grid container direction={"column"}>
        <TextField
          id="title"
          label="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange("title")}
          margin="normal"
        />
        <TextField
          id="content"
          label="Comment"
          multiline
          value={this.state.content}
          onChange={this.handleChange("content")}
          rows="4"
          margin="normal"
        />
        <Button
          color="secondary"
          onClick={() => {
            this.props.postArticleComment(this.props.articleId, {
              title: this.state.title,
              content: this.state.content
            });
          }}
        >
          Send
        </Button>
      </Grid>
    );
  }
}

export default NewComment;
