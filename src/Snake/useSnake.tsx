import { useEffect, useRef, useState } from "react"
import { SNAKESPEED, INITIAL_SNAKE } from "./SnakeConstants";
import { getRandomBerryPosition, moveSnake } from "./SnakeLogic";

export const useSnake = (gridWidth: number, gridHeight: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [snake, setSnake] = useState<{x: number, y: number}[]>(INITIAL_SNAKE);
    const [berry, setBerry] = useState<{x: number, y: number}>(getRandomBerryPosition(INITIAL_SNAKE,gridWidth,gridHeight))
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSnake((prevSnake) => {
                const [newSnake, ateBerry] = moveSnake(prevSnake, gridWidth, gridHeight, berry);

                if (ateBerry == true){
                    const newBerry = getRandomBerryPosition(newSnake, gridWidth, gridHeight);
                    setBerry(newBerry);
                    setScore((prevScore) => prevScore + 1);
                    console.log(score)
                }

                return newSnake
            });
        }, SNAKESPEED)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    },[snake]);

    return {snake, berry, setSnake};
};