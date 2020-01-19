export default (pick, housePick) => {
  const DEFEAT = ["You lose", 0];
  const DRAW = ["It's a draw", 0];
  const WIN = ["You won", 1];

  if (housePick === pick) return DRAW;

  switch (pick) {
    case "rock":
      return housePick === "paper" ? DEFEAT : WIN;
    case "paper":
      return housePick === "scissors" ? DEFEAT : WIN;
    case "scissors":
      return housePick === "rock" ? DEFEAT : WIN;

    default:
      return DRAW;
  }
};
