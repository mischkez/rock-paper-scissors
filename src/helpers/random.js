export default () => {
  const choices = ["paper", "rock", "scissors"];
  const random = Math.random() * choices.length;
  return choices[Math.floor(random)];
};
