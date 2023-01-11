import { useContext } from "react";
import { GameStateContext } from "../../App";
import { TextComponent } from "../styled/TextComponent.styled";

const GameDialog = () => {
  const { showGameSetUp, isGameOver, isGameWon, isPayer1Turn } =
    useContext(GameStateContext);

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

  return <TextComponent>{createText()} </TextComponent>;
};

export default GameDialog;
