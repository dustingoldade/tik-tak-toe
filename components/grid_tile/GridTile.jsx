import "./GridTile.css";

const GridTile = ({ tileLabel }) => {
  const className = `grid__tile--photo-holder ${
    tileLabel === "X" && "grid__tile--paul"
  } ${tileLabel === "O" && "grid__tile--yoko"} 
  }`;
  return <div className={className} />;
};

export default GridTile;
