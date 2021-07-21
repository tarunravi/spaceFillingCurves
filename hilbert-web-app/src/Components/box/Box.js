import React, { useState, useContext } from "react";
import "./Box.css";
import { ThemeContext } from "../../Store/ThemeProvider";

function Box({ colorCode }) {
  const [theme, setTheme] = useContext(ThemeContext);

  var color = "#000000";
  if (theme === "light") {
    switch (colorCode) {
      case "0":
        color = "rgb(242,242,247)";
        break;
      case "1":
        color = "rgb(229,229,234)";
        break;
      case "2":
        color = "rgb(219,219,219)";
        break;
      case "3":
        color = "rgb(199,199,204)";
        break;
      case "4":
        color = "rgb(174,174,178)";
        break;
      case "5":
        color = "rgb(142,142,147)";
        break;
    }
  } else {
    switch (colorCode) {
      case "0":
        color = "rgb(142,142,147)";
        break;
      case "1":
        color = "rgb(99,99,102)";
        break;
      case "2":
        color = "rgb(72,72,74)";
        break;
      case "3":
        color = "rgb(58,58,60)";
        break;
      case "4":
        color = "rgb(44,44,46)";
        break;
      case "5":
        color = "rgb(28,28,30)";
        break;
    }
  }

  const mystyle = {
    backgroundColor: color,
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: "1",
  };

  return <div className="box" style={mystyle} />;
}

export default Box;
