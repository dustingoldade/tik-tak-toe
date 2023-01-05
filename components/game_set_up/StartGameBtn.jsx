import { Button } from "@mui/material";
import "./GameSetUp.css";

const StartGameBtn = ({ playAgain }) => {
  return (
    <Button
      variant="contained"
      onClick={playAgain}
      className="modal__button--center"
    >
      Play Game
    </Button>
  );
};

export default StartGameBtn;
