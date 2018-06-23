import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwitchButton from "./Switchbutton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

function AppHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            color={"secondary"}
            variant={"title"}
            className={classes.flex}
          >
            Economist Scraper
          </Typography>
          <div className="switch-div">
            <SwitchButton
              currentView={props.view}
              switchHandler={props.switchHandler}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(AppHeader);
