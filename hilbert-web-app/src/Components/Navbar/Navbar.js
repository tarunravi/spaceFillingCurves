import React, { useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../Store/ThemeProvider";

function Navbar({ color, height }) {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <nav className={"Navbar " + theme + "Bar"}>
      <h1 className={"titleText " + theme + "TitleText"}>
        <span className="bold">Tarun Ravi's </span>Space Filling Curve
      </h1>

      <div className="buttons">
        <h1
          onClick={(theme) => setTheme("dark")}
          className={"buttonText " + theme + "Text"}
        >
          Linear
        </h1>

        <h1
          onClick={(theme) => setTheme("light")}
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
