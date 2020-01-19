import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import AppContext from "../state/AppContext";

export default function Scoreboard() {
  return (
    <AppContext.Consumer>
      {context => {
        return (
          <div className="scoreboard">
            <Link to="/">
              <img src={logo} className="app-logo" alt="logo" />
            </Link>
            <div className="score">
              <span className="score-title">Score</span>
              <span className="score-count">{context.state.score}</span>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
