import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { GridContainer,GridCell } from "./GridStyles";
import { SnakeContainer, SnakePart } from "../Snake/SnakeStyles";
import berryImg from "../Assets/berry.png";

interface GridProps {
    gridWidth: number;
    gridHeight: number;
    snake: { x: number; y: number }[];
    berry: { x: number; y: number };
}

const Grid: React.FC<GridProps> = ({ gridWidth, gridHeight, snake, berry }) => {
    const [cellSize, setCellSize] = useState(0);

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

export default Grid