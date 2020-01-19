import React, { Fragment, useState } from "react";
import LinkToSceneTwo from "../components/LinkToSceneTwo";
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
                <LinkToSceneTwo
                  choice="paper"
                  setPicked={setPicked}
                  setHousePicked={setHousePicked}
                />
                <LinkToSceneTwo
                  choice="scissors"
                  setPicked={setPicked}
                  setHousePicked={setHousePicked}
                />
              </div>
              <div className="scene-one-bottom">
                <LinkToSceneTwo
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
