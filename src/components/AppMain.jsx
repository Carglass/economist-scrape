import React from "react";

function AppMain(props) {
  if (props.view === "view-articles") {
    return <div> View Articles </div>;
  } else if (props.view === "scrape-articles") {
    return <div> Scrape Articles </div>;
  }
}

export default AppMain;
