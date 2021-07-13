import React, { useState } from "react";
import "./Navbar.css";


function Navbar({color, height}) {
    return (
        <nav className = "Navbar">
            <h1 className="titleText">
                <span className="bold">Tarun Ravi's </span>Space Filling Curve
            </h1>
            <div className="buttons">            
                <h1 className="buttonText">Linear</h1>    
                <h1 className="buttonText">Hilbert</h1>        
            </div>
      </nav>
    )
}

export default Navbar;