import React, { Fragment, useState } from "react";
import Choice from "../components/Choice";
import RulesButton from "../components/RulesButton";
import RulesModal from "../components/RulesModal";
import AppContext from "../state/AppContext";

export default function SceneOne() {
  const [show, setShow] = useState(false);

  return (
    <AppContext.Consumer>
      {context => {
        const { setPicked, setHousePicked } = context;
        return (
          <Fragment>
            <div className="scene-one">
              <div className="scene-one-top">
                <Choice
                  choice="paper"
                  setPicked={setPicked}
                  setHousePicked={setHousePicked}
                />
                <Choice
                  choice="scissors"
                  setPicked={setPicked}
                  setHousePicked={setHousePicked}
                />
              </div>
              <div className="scene-one-bottom">
                <Choice
                  choice="rock"
                  setPicked={setPicked}
                  setHousePicked={setHousePicked}
                />
              </div>
            </div>
            <RulesButton showModal={() => setShow(true)} />
            <RulesModal show={show} handleClose={() => setShow(false)} />
          </Fragment>
        );
      }}
    </AppContext.Consumer>
  );
}
