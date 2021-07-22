import React, { useState, useEffect, useContext } from "react";
import "./Visualization.css";
import Box from "../box/Box";
import { VisualizationContext } from "../../Store/VisualizationTypeProvider";
import { ThemeContext } from "../../Store/ThemeProvider";

import { FixedSizeGrid as Grid } from "react-window";

function Visualization() {
  const [visualizationType, setVisualizationType] =
    useContext(VisualizationContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const [currentTime, setCurrentTime] = useState(0);

  const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const updateState = (jsonData) => {
    setIsLoading(false);
    setData(jsonData);
  };

  useEffect(() => {
    fetch("/" + visualizationType)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentTime(data.data);
      });
  }, [visualizationType]);

  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? "GridItemOdd"
            : "GridItemEven"
          : rowIndex % 2
          ? "GridItemOdd"
          : "GridItemEven"
      }
      style={style}
    >
      <Box colorCode={currentTime[rowIndex][columnIndex]} />
    </div>
  );

  return (
    <div className={"spaceFilling " + theme}>
      {currentTime && (
        <Grid
          className="Grid"
          columnCount={currentTime[0].length}
          columnWidth={
            window.innerWidth / currentTime[0].length > 50
              ? window.innerWidth / currentTime[0].length
              : 50
          }
          height={window.innerHeight - 40}
          rowCount={currentTime.length}
          rowHeight={
            window.innerWidth / currentTime[0].length > 50
              ? window.innerWidth / currentTime[0].length
              : 50
          }
          width={window.innerWidth}
        >
          {Cell}
        </Grid>
      )}
      {!currentTime && (
        <div>
          <h3>loading...</h3>
        </div>
      )}
    </div>
  );
}

export default Visualization;
