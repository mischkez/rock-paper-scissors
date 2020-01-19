import React from "react";

export default function RulesButton({ showModal }) {
  return (
    <div className="rules" onClick={() => showModal()}>
      Rules
    </div>
  );
}
