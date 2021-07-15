import React, { useState, useEffect } from "react";
import "./Visualization.css";
import Box from "../box/Box";

function Visualization() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/hilbert")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.data);
      });
  }, []);

  return (
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
    </div>
  );
}

export default Visualization;
