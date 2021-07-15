import React, { useState, useEffect } from "react";
import "./MainUI.css";
import Navbar from "../../Components/Navbar/Navbar";
import Visualization from "../../Components/Visualization/Visualization";

import { ThemeProvider } from "../../Store/ThemeProvider";
import { VisualizationTypeProvider } from "../../Store/VisualizationTypeProvider";
function App() {
  return (
    <VisualizationTypeProvider>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Visualization />
        </div>
      </ThemeProvider>
    </VisualizationTypeProvider>
  );
}

export default App;
