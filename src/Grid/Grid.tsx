import { GridContainer, GridCell } from "./GridStyles";
import { SnakeContainer, SnakePart } from "../Snake/SnakeStyles";
import berryImg from "../Assets/berry.png";
import { useGridSize } from "../Hooks/UseGrid";

interface GridProps {
  snake: { x: number; y: number }[];
  berry: { x: number; y: number };
}

const Grid: React.FC<GridProps> = ({ snake, berry }) => {
  const { cellSize, cols, rows } = useGridSize();

  return (
    <GridContainer gridColumns={cols} gridRows={rows} cellSize={cellSize}>
      {/* Render grid cells */}
      {Array.from({ length: cols * rows }).map((_, index) => (
        <GridCell key={index} cellSize={cellSize} />
      ))}

      {/* Render berry */}
      <img
        src={berryImg}
        alt="Berry"
        style={{
          position: "absolute",
          left: berry.x * cellSize,
          top: berry.y * cellSize,
          width: cellSize,
          height: cellSize,
          userSelect: "none",
        }}
      />

      {/* Render snake */}
      <SnakeContainer>
        {snake.map((segment, index) => (
          <SnakePart
            key={index}
            cellSize={cellSize}
            style={{
              left: segment.x * cellSize + cellSize * 0.15,
              top: segment.y * cellSize + cellSize * 0.15,
            }}
          />
        ))}
      </SnakeContainer>
    </GridContainer>
  );
};

export default Grid;