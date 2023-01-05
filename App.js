import "./App.css";
import { useState } from "react";
import ExpandableGrid from "./components/expandable_grid/ExpandableGrid";
import GameSetUp from "./components/game_set_up/GameSetUpModal";
import { Box } from "@mui/material";
import GameDialog from "./components/text_component/GameDialog";
import GameFinishedButtons from "./components/game_finished_buttons/GameFinishedButtons";
const defaultBoardSize = 4;
const defaultNumberInARow = 4;

const checkIfGameWonCustomLen = (board, inARow) => {
  const length = board.length;
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (board[y][x] === null) {
        continue;
      }
      //check Row
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y][x + i]) {
          break;
        }
        if (i === inARow - 1) {
          console.log("consecutive blocks found at:" + y + " " + x);
          return true;
        }
      }
      //check Col
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y + i][x]) {
          break;
        }
        if (i === inARow - 1) {
          console.log("consecutive blocks found at col:" + y + " " + x);
          return true;
        }
      }
      // Check Diag top left to bottom right
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y + inARow > length || x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y + i][x + i]) {
          break;
        }
        if (i === inARow - 1) {
          console.log("consecutive blocks found at diag:" + y + " " + x);
          return true;
        }
      }
      // Check Diag bottom left to top right
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y - inARow < -1 || x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y - i][x + i]) {
          break;
        }
        if (i === inARow - 1) {
          console.log(
            "consecutive blocks found at diag btm to top:" + y + " " + x
          );
          return true;
        }
      }
    }
  }
  return false;
};

const createGridObj = (length) => {
  const arry = [];
  for (let i = 0; i < length; i++) {
    arry[i] = [];
    for (let y = 0; y < length; y++) {
      arry[i][y] = null;
    }
  }
  return arry;
};
const checkIfGameOver = (array) => {
  const flatMap = array.flatMap((e) => e);
  if (!flatMap.includes(null)) {
    return true;
  }
  return false;
};

//////////////////
function App() {
  const [boardTiles, setBoardTiles] = useState(createGridObj(defaultBoardSize));
  const [isPayer1Turn, setIsPlayer1Turn] = useState(true);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showGameSetUp, setShowGameSetUp] = useState(true);
  const [requiredNumberInARow, setRequiredNumberInARow] =
    useState(defaultNumberInARow);

  const playerTurn = (coordinates) => {
    // Block if game won
    if (isGameWon) {
      return;
    }
    const updatedBoardObj = [...boardTiles];

    // block changing cells that contain an Item
    if (updatedBoardObj[coordinates.row][coordinates.col]) {
      return;
    }
    const tileOption = isPayer1Turn ? "X" : "O";

    updatedBoardObj[coordinates.row][coordinates.col] = tileOption;

    setBoardTiles(updatedBoardObj);

    if (checkIfGameWonCustomLen(updatedBoardObj, requiredNumberInARow)) {
      setIsGameWon(true);
    }
    if (checkIfGameOver(updatedBoardObj)) {
      setIsGameOver(true);
    }
    setIsPlayer1Turn(!isPayer1Turn);
  };

  const playAgain = () => {
    setShowGameSetUp(false);
    setBoardTiles(createGridObj(boardTiles.length));
    setIsPlayer1Turn(true);
    setIsGameOver(false);
    setIsGameWon(false);
  };

  const boardTilesHandler = (num) => {
    setBoardTiles(createGridObj(num));
  };

  const requiredNumberInARowHandler = (num) => {
    setRequiredNumberInARow(num);
  };

  const gameStates = { showGameSetUp, isGameOver, isGameWon, isPayer1Turn };

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {showGameSetUp && (
        <GameSetUp
          boardTilesHandler={boardTilesHandler}
          requiredNumberInARowHandler={requiredNumberInARowHandler}
          maxNumberInARow={boardTiles.length}
          playAgain={playAgain}
        />
      )}
      <ExpandableGrid boardTiles={boardTiles} playerTurn={playerTurn} />
      <GameDialog gameStates={gameStates} />
      {(isGameOver || isGameWon) && !showGameSetUp && (
        <GameFinishedButtons
          playAgain={playAgain}
          setShowGameSetUp={setShowGameSetUp}
        />
      )}
    </Box>
  );
}

export default App;
