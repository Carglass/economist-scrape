import React from "react";
import SwitchButton from "./Switchbutton";

function AppHeader(props) {
  return (
    <header className="appbar">
      <div className="app-title">Economist Scraper</div>
      <div className="switch-div">
        <SwitchButton
          currentView={props.view}
          switchHandler={props.switchHandler}
        />
      </div>
    </header>
  );
}

export default AppHeader;
