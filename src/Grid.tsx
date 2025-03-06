import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { GridContainer,GridCell } from "./GridStyles";
import { SnakeContainer, SnakePart } from "./SnakeStyles";
import { useSnake } from "./useSnake";

interface GridProps {
    gridSize: number;
}

const Grid: React.FC<GridProps> = ({ gridSize }) => {
    const [cellSize, setCellSize] = useState(0);

    const { snake } = useSnake(gridSize);

    // Handle window resizing 
    useEffect(() => {
        const calculateCellSize = debounce(() => {
            const newCellSize = window.innerWidth / gridSize;
            //console.log(newCellSize)
            setCellSize(newCellSize)
        },100);

        calculateCellSize();
        
        window.addEventListener("resize", calculateCellSize);

        return () => window.removeEventListener("resize", calculateCellSize);
    }, [gridSize])

    return (
        <GridContainer gridSize={gridSize} cellSize={cellSize}>
            {/* Render grid cells */}
            {Array.from({ length: gridSize * gridSize / 1.5 }).map((_, index) => (
                <GridCell 
                    key={index}
                    cellSize={cellSize} 
                />
            ))}

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

export default Grid