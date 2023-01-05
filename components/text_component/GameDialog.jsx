import TextComponent from "./TextComponent";

const GameDialog = ({ gameStates }) => {
  const { showGameSetUp, isGameOver, isGameWon, isPayer1Turn } = gameStates;

  const createText = () => {
    if (showGameSetUp) {
      return;
    }
    //Text for winning the game
    if (isGameWon) {
      return `${!isPayer1Turn ? "Paul" : "Yoko"} Has Won!!!!`;
    }
    // Text for bocking all the tiles
    if (isGameOver) {
      return `All of the tiles have been chosen. Game over!!`;
    }
    // Player turn text
    return `Pick a square: ${isPayer1Turn ? "Paul" : "Yoko"}!`;
  };

  return <TextComponent text={createText()} />;
};

export default GameDialog;
