import React, { useState, useEffect, useContext } from "react";
import "./Visualization.css";
import Box from "../box/Box";
import { VisualizationContext } from "../../Store/VisualizationTypeProvider";

function Visualization() {
  const [visualizationType, setVisualizationType] =
    useContext(VisualizationContext);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/" + visualizationType)
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.data);
      });
  }, [visualizationType]);

  return (
    <div className="spaceFilling">
      {currentTime &&
        currentTime.map((row) => (
          <div className="row">
            {row.map((element) => (
              <Box
                colorCode={element}
                height={(window.innerHeight - 40) / currentTime.length}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default Visualization;
