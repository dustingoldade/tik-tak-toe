import GridTile from "../grid_tile/GridTile";
import {
  GridContainer,
  GridFlex,
  GridTileFlex,
} from "../styled/Grid.styled.js";

const gridJSX = (boardTiles, playerTurn) => {
  return boardTiles.map((row, rowIndex) => {
    return (
      <GridFlex display={"flex"} justifyContent={"center"}>
        {row.map((tileLabel, colIndex) => {
          return (
            <GridTileFlex
              onClick={() => playerTurn({ row: rowIndex, col: colIndex })}
            >
              <GridTile tileLabel={tileLabel} />
            </GridTileFlex>
          );
        })}
      </GridFlex>
    );
  });
};

const ExpandableGrid = ({ boardTiles, playerTurn }) => {
  return <GridContainer>{gridJSX(boardTiles, playerTurn)}</GridContainer>;
};

export default ExpandableGrid;
