import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../state/AppContext";

export default function SceneThree() {
  return (
    <AppContext.Consumer>
      {context => {
        const { picked, hosuePicked, result } = context.state;

        return (
          <div className="scene-two">
            <div>
              <p>You picked</p>
              <div className={"rounded-bigger " + picked}></div>
            </div>
            <div>
              <p>The House picked</p>
              <div className={"rounded-bigger " + hosuePicked}></div>
            </div>
            <div className="play-again">
              <h2 className="result-msg">{result}</h2>
              <Link to="/" className="play-again-link">
                Play again
              </Link>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
