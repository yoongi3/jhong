import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { GridContainer,GridCell } from "./GridStyles";

interface GridProps {
    gridSize: number;
}

const Grid: React.FC<GridProps> = ({ gridSize }) => {
    const [cellSize, setCellSize] = useState(0);
    
    useEffect(() => {
        const calculateCellSize = debounce(() => {
            const newCellSize = window.innerWidth / gridSize;
            console.log(newCellSize)
            setCellSize(newCellSize)
        },100);

        calculateCellSize();
        
        window.addEventListener("resize", calculateCellSize);

        return () => window.removeEventListener("resize", calculateCellSize);
    }, [gridSize])
    

    return (
        <GridContainer gridSize={gridSize} cellSize={cellSize}>
            {Array.from({ length: gridSize * gridSize/2 }).map((_, index) => {
                return <GridCell key={index} cellSize={cellSize}/>;
            })}
        </GridContainer>
    );
};

export default Grid