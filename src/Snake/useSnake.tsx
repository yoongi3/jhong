import { useEffect, useRef, useState } from "react"
import { SNAKESPEED, INITIAL_SNAKE } from "./SnakeConstants";
import { moveSnake } from "./snakeLogic";

export const useSnake = (gridWidth: number, gridHeight: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [snake, setSnake] = useState<{x: number, y:number}[]>(INITIAL_SNAKE);

    
    useEffect(() => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSnake((prevSnake) => {
                return moveSnake(prevSnake, gridWidth, gridHeight);
            });
        }, SNAKESPEED)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    },[snake]);

    return {snake, setSnake};
};