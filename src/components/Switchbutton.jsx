import React from "react";

const SwitchButton = props => (
  <button onClick={props.switchHandler}>
    {props.currentView === "view-articles" ? "Scrape" : "Back"}
  </button>
);

export default SwitchButton;
