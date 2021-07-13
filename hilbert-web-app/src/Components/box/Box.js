import React, { useState } from "react";
import "./Box.css";


function Box({color, height}) {
  console.log(window.innerHeight)
  
  const mystyle = {
    backgroundColor: color,
    flex: 1,
    width: "100%",
    height: height+"px",
    zIndex: "1",
  };


  return (
    <div className="box" style={mystyle}/>
  );
}

export default Box;