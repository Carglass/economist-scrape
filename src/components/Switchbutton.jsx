import React from "react";
import Button from "@material-ui/core/Button";

const SwitchButton = props => (
  <Button onClick={props.switchHandler} color={"secondary"} variant="contained">
    {props.currentView === "view-articles" ? "Scrape" : "Back"}
  </Button>
);

export default SwitchButton;
