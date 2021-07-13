import React, { useState } from "react";
import "./Box.css";


function Box({color}) {
  console.log(color)
  const mystyle = {
    backgroundColor: color,
    width: "100%",
    height: "10px"
  };


  return (
    <div className="box" style={mystyle}/>
  );
}

export default Box;