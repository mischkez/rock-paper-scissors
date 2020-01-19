export default (pick, housePick) => {
  const WIN = ["You won", 1];
  const DEFEAT = ["You lose", 0];
  const DRAW = ["It's a draw", 0];

  switch (pick) {
    case "rock":
      if (housePick === "paper") {
        return DEFEAT;
      }
      if (housePick === "scissors") {
        return WIN;
      }
      return DRAW;

    case "paper":
      if (housePick === "rock") {
        return WIN;
      }
      if (housePick === "scissors") {
        return DEFEAT;
      }
      return DRAW;

    case "scissors":
      if (housePick === "rock") {
        return DEFEAT;
      }
      if (housePick === "paper") {
        return WIN;
      }
      return DRAW;

    default:
      return DRAW;
  }
};
