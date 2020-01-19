import React from "react";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

export default function RulesModal({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h1>Rules</h1>
          <button className="close-button" onClick={handleClose}>
            <img src={close} alt="close button" />
          </button>
        </div>
        <div className="modal-body">
          <img src={rules} alt="rules" />
        </div>
      </section>
    </div>
  );
}
