import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { GameStateContext } from "../../App";
import { Flex } from "../styled/Flex.styled";
import { PlayAgainButton } from "../styled/Buttons.styled";

const GameFinishedButtons = ({ setShowGameSetUp, playAgain }) => {
  const { isGameOver, isGameWon, showGameSetUp } = useContext(GameStateContext);
  return (
    (isGameOver || isGameWon) &&
    !showGameSetUp && (
      <Flex>
        <PlayAgainButton
          onClick={() => {
            playAgain();
          }}
        >
          PLAY AGAIN?
        </PlayAgainButton>

        <PlayAgainButton
          onClick={() => {
            setShowGameSetUp(true);
          }}
        >
          CONFIGURE GAME
        </PlayAgainButton>
      </Flex>
    )
  );
};

export default GameFinishedButtons;
