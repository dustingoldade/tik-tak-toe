import { Box, Typography } from "@mui/material";
import NumberInput from "./NumberInput";
import StartGameBtn from "./StartGameBtn";

const GameSetUpModal = ({
  boardTilesHandler,
  requiredNumberInARowHandler,
  maxNumberInARow,
  playAgain,
}) => {
  return (
    <div className="modal__background">
      <Box border={3} p={5} borderRadius={3} className="modal__content">
        <Typography mb={1} textAlign={"center"} variant={"h6"}>
          Welcome to Tik-Tak-Toe: Paul vs Yoko
        </Typography>
        <Typography textAlign={"center"} variant={"subtitle2"} mb={4}>
          Please customize the board:
        </Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={2}
        >
          <Typography variant={"subtitle2"} mr={2}>
            Board size:
          </Typography>
          <NumberInput
            minValue={3}
            maxValue={10}
            defaultValue={4}
            stateUpdate={boardTilesHandler}
            inputText={""}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={4}
        >
          <Typography variant={"subtitle2"} mr={2}>
            Required number in a row:
          </Typography>
          <NumberInput
            minValue={3}
            maxValue={maxNumberInARow}
            defaultValue={4}
            stateUpdate={requiredNumberInARowHandler}
            controlled={true}
          />
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <StartGameBtn playAgain={playAgain} />
        </Box>
      </Box>
    </div>
  );
};

export default GameSetUpModal;
