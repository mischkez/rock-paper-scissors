import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scoreboard from "./components/Scoreboard";
import "./css/App.css";
import SceneOne from "./scenes/SceneOne";
import SceneThree from "./scenes/SceneThree";
import SceneTwo from "./scenes/SceneTwo";
import AppProvider from "./state/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Scoreboard />
          <Switch>
            <Route exact path="/">
              <SceneOne />
            </Route>
            <Route path="/scene-two">
              <SceneTwo />
            </Route>
            <Route path="/scene-three">
              <SceneThree />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
