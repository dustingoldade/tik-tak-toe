import { Box, Button } from "@mui/material";

const GameFinishedButtons = ({ setShowGameSetUp, playAgain }) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          playAgain();
        }}
      >
        Play Again?
      </Button>

      <Button
        variant="contained"
        size="small"
        sx={{ mt: 1 }}
        onClick={() => {
          setShowGameSetUp(true);
        }}
      >
        Confirgure game
      </Button>
    </Box>
  );
};

export default GameFinishedButtons;
