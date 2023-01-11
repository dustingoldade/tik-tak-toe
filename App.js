import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ExpandableGrid from "./components/expandable_grid/ExpandableGrid";
import GameSetUp from "./components/game_set_up/GameSetUpModal";
import GameDialog from "./components/text_component/GameDialog";
import GameFinishedButtons from "./components/game_finished_buttons/GameFinishedButtons";
import { createContext } from "react";
import GlobalStyles from "./components/styled/Global";
import { Flex } from "./components/styled/Flex.styled";
import { defaultTheme, darkTheme } from "./locals/themes";
import {
  checkIfGameWonCustomLen,
  createGridObj,
  checkIfGameOver,
} from "./locals/utilities";
const defaultBoardSize = 4;
const defaultNumberInARow = 4;
const arrayOfTilesThatWon = [];
export const GameStateContext = createContext(null);

////////////////////////////////////////////////////////
function App() {
  const [boardTiles, setBoardTiles] = useState(createGridObj(defaultBoardSize));
  const [arrayOfTilesThatWon, setArrayOfTilesThatWon] = useState([]);
  const [isPayer1Turn, setIsPlayer1Turn] = useState(true);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showGameSetUp, setShowGameSetUp] = useState(true);
  const [requiredNumberInARow, setRequiredNumberInARow] =
    useState(defaultNumberInARow);
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);
  const theme = isDefaultTheme ? { ...defaultTheme } : { ...darkTheme };

  const gameStates = { showGameSetUp, isGameOver, isGameWon, isPayer1Turn };

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

    const tilesThatWon = checkIfGameWonCustomLen(
      updatedBoardObj,
      requiredNumberInARow
    );
    if (tilesThatWon) {
      setIsGameWon(true);
      setArrayOfTilesThatWon([...tilesThatWon]);
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

  return (
    <Flex>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GameStateContext.Provider value={gameStates}>
          <GameSetUp
            boardTilesHandler={boardTilesHandler}
            requiredNumberInARowHandler={requiredNumberInARowHandler}
            maxNumberInARow={boardTiles.length}
            playAgain={playAgain}
            setIsDefaultTheme={setIsDefaultTheme}
            isDefaultTheme={isDefaultTheme}
          />

          <ExpandableGrid boardTiles={boardTiles} playerTurn={playerTurn} />
          <GameDialog />
          <GameFinishedButtons
            playAgain={playAgain}
            setShowGameSetUp={setShowGameSetUp}
          />
        </GameStateContext.Provider>
      </ThemeProvider>
    </Flex>
  );
}

export default App;
