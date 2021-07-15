import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import MainUI from "./Pages/MainUI/MainUI";
import UploadFile from "./Pages/UploadFile/UploadFile";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UploadFile} />
        <Route path="/main" component={MainUI} />
      </Switch>
    </Router>
  );
}

export default App;
