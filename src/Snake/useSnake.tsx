import { useEffect, useRef, useState } from "react";
import { SNAKESPEED, INITIAL_SNAKE } from "./SnakeConstants";
import { getRandomBerryPosition, moveSnake } from "./SnakeLogic";

export const useSnake = (gridWidth: number, gridHeight: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [snake, setSnake] = useState<{x: number, y: number}[]>(INITIAL_SNAKE);
    const [berry, setBerry] = useState<{x: number, y: number}>(getRandomBerryPosition(INITIAL_SNAKE, gridWidth, gridHeight));
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSnake((prevSnake) => {
                const [newSnake, ateBerry, isGameOver] = moveSnake(prevSnake, gridWidth, gridHeight, berry);

                if (isGameOver) {
                    setScore(0);
                    setBerry(getRandomBerryPosition(newSnake, gridWidth, gridHeight));
                    return INITIAL_SNAKE;
                }

                if (ateBerry) {
                    // Update the berry position and increment the score
                    const newBerry = getRandomBerryPosition(newSnake, gridWidth, gridHeight);
                    setBerry(newBerry);

                    setScore((prevScore) => {
                        const newScore = prevScore + 1;
                        return newScore;
                    });
                }

                return newSnake;
            });
        }, SNAKESPEED);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [berry]); 

    return { snake, berry, score };
};