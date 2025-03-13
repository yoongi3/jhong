import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { GridContainer,GridCell } from "./GridStyles";
import { SnakeContainer, SnakePart } from "../Snake/SnakeStyles";
import { useSnake } from "../Snake/useSnake";

interface GridProps {
    gridWidth: number;
    gridHeight: number;
}

const Grid: React.FC<GridProps> = ({ gridWidth, gridHeight }) => {
    const [cellSize, setCellSize] = useState(0);

    const { snake } = useSnake(gridWidth, gridHeight);

    // Handle window resizing 
    useEffect(() => {
        const calculateCellSize = debounce(() => {
            const newCellSize = window.innerWidth / gridWidth;
            //console.log(newCellSize)
            setCellSize(newCellSize)
        },100);

        calculateCellSize();
        
        window.addEventListener("resize", calculateCellSize);

        return () => window.removeEventListener("resize", calculateCellSize);
    }, [gridWidth])

    return (
        <GridContainer gridColumns={gridWidth} gridRows={gridHeight} cellSize={cellSize}>
            {/* Render grid cells */}
            {Array.from({ length: gridWidth * gridHeight }).map((_, index) => (
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