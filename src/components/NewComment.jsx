import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <div>
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
        <Button variant="contained">Submit</Button>
      </div>
    );
  }
}

export default NewComment;
