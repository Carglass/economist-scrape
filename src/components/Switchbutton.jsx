import React from "react";

const SwitchButton = props => (
  <button>{props.currentView === "view-articles" ? "Scrape" : "Back"}</button>
);

export default SwitchButton;
