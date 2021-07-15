import React, { useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../Store/ThemeProvider";
import { VisualizationContext } from "../../Store/VisualizationTypeProvider";

function Navbar({ color, height }) {
  const [theme, setTheme] = useContext(ThemeContext);
  const [visualizationType, setVisualizationType] =
    useContext(VisualizationContext);

  return (
    <nav className={"Navbar " + theme + "Bar"}>
      <h1 className={"titleText " + theme + "TitleText"}>
        <span className="bold">Tarun Ravi's </span>Space Filling Curve
      </h1>

      <div className="buttons">
        <h1
          onClick={() => setVisualizationType("linear")}
          className={"buttonText " + theme + "Text"}
        >
          Linear
        </h1>

        <h1
          onClick={() => setVisualizationType("hilbert")}
          className={"buttonText " + theme + "Text"}
        >
          Hilbert
        </h1>

        <div
          className="themeSwitch"
          className={theme + "Switch" + " switch"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <div className={theme + "Circle" + " switchCircle"}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
