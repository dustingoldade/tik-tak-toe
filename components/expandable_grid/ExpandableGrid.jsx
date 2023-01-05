import "./ExpandableGrid.css";
import GridTile from "../grid_tile/GridTile";
import { Grid, Container, Box } from "@mui/material";

const gridJSX = (boardTiles, playerTurn) => {
  console.log("rendered");
  return boardTiles.map((row, rowIndex) => {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        {row.map((tileLabel, colIndex) => {
          return (
            <Box
              className="expandable_grid--tile"
              key={`tile-${colIndex}`}
              m={0.2}
              onClick={() => playerTurn({ row: rowIndex, col: colIndex })}
            >
              <GridTile tileLabel={tileLabel} />
            </Box>
          );
        })}
      </Box>
    );
  });
};

const ExpandableGrid = ({ boardTiles, playerTurn }) => {
  return (
    <Box p={4} border={1} m={2} className="expandable__grid--conatiner">
      {gridJSX(boardTiles, playerTurn)}
    </Box>
  );
};

export default ExpandableGrid;
