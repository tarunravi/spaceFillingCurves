import React, { useState, createContext } from "react";

export const VisualizationContext = createContext();

export const VisualizationTypeProvider = (props) => {
  const [visualizationType, setVisualizationType] = useState("linear");

  return (
    <VisualizationContext.Provider
      value={[visualizationType, setVisualizationType]}
    >
      {props.children}
    </VisualizationContext.Provider>
  );
};
