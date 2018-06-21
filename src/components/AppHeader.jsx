import React from "react";
import SwitchButton from "./Switchbutton";
import "./AppHeader.css";

function AppHeader(props) {
  return (
    <header className="appbar">
      <div className="app-title">Economist Scraper</div>
      <div className="switch-div">
        <SwitchButton currentView={props.view} />
      </div>
    </header>
  );
}

export default AppHeader;
