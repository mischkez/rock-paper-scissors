import React from "react";
import { Link } from "react-router-dom";
import random from "../helpers/random";

export default function Choice(props) {
  const { choice, setPicked, setHousePicked } = props;
  const randomChoice = random();

  return (
    <Link
      to="/scene-two"
      onClick={() => {
        setPicked(choice);
        setHousePicked(randomChoice);
      }}
    >
      <span class="sr-only">This link has no text</span>
      <div className={"rounded " + choice}></div>
    </Link>
  );
}
