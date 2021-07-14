import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Components/box/Box";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/hilbert")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="spaceFilling">
        {currentTime &&
          currentTime.map((row) => (
            <div className="row">
              {row.map((element) => (
                <Box
                  color={element}
                  height={(window.innerHeight - 40) / currentTime.length}
                />
              ))}
            </div>
          ))}
        {currentTime && console.log(currentTime)}
      </div>
    </div>
  );
}

export default App;
