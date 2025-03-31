import MemoizedGridCell, { GridContainer } from "./GridStyles";
import { SnakeContainer, SnakePart } from "../Snake/SnakeStyles";
import berryImg from "../Assets/berry.png";
import { useGridSize } from "../Hooks/useGrid";
import { BERRY_SIZE, MAXSIZE, MAXSIZE_REDUCE } from "../Snake/SnakeConstants";
import { useSnake } from "../Hooks/useSnake";

const Grid: React.FC = () => {
  const { snake, berry } = useSnake();
  const { cellSize, cols, rows } = useGridSize();

  const renderGrid = () => (
    Array.from({ length: cols * rows }).map((_, index) => (
      <MemoizedGridCell key={index} cellSize={cellSize} />
    ))
  );

  return (
    <GridContainer gridColumns={cols} gridRows={rows} cellSize={cellSize}>
      {renderGrid()}

      {/* Render berry */}
      <img
        src={berryImg}
        alt="Berry"
        style={{
          position: "absolute",
          left: berry.x * cellSize + (cellSize - cellSize * BERRY_SIZE) / 2,
          top: berry.y * cellSize + (cellSize - cellSize * BERRY_SIZE) / 2,
          width: cellSize * BERRY_SIZE,
          height: cellSize * BERRY_SIZE,
          userSelect: "none",
        }}
      />

      {/* Render snake */}
      <SnakeContainer>
        {snake.map((segment, index) => {
          const sizeMultiplier = index / snake.length;
          const adjustedSize = cellSize * (MAXSIZE - MAXSIZE_REDUCE * sizeMultiplier);

          return (
            <SnakePart
              key={index}
              partSize={adjustedSize} // Adjust the size for each body part
              style={{
                left: segment.x * cellSize + (cellSize - adjustedSize) / 2, // Center the part
                top: segment.y * cellSize + (cellSize - adjustedSize) / 2, // Center the part
              }}
            />
          );
        })}
      </SnakeContainer>
    </GridContainer>
  );
};

export default Grid;