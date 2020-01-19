import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../state/AppContext";

export default function SceneTwo() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 1200);
  }, []);

  return (
    <AppContext.Consumer>
      {context => {
        if (redirect) return <Redirect to="/scene-three" />;

        return (
          <div className="scene-two">
            <div>
              <p>You picked</p>
              <div className={"rounded-bigger " + context.state.picked}></div>
            </div>
            <div>
              <p>The House picked</p>
              <div className="bg-dark rounded"></div>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
