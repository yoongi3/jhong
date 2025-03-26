import { useEffect, useRef, useState } from "react";
import { SNAKESPEED, INITIAL_SNAKE } from "../Snake/SnakeConstants";
import { getRandomBerryPosition, moveSnake } from "../Snake/SnakeLogic";
import { useGridSize } from "./UseGrid";

export const useSnake = () => {
  const { cols, rows } = useGridSize();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Snake, berry, and score states
  const [snake, setSnake] = useState<{ x: number; y: number }[]>(INITIAL_SNAKE);
  const [berry, setBerry] = useState<{ x: number; y: number }>(
    getRandomBerryPosition(INITIAL_SNAKE, cols, rows)
  );
  const [score, setScore] = useState(0);

  // Snake movement and game logic
  useEffect(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const [newSnake, ateBerry, isGameOver] = moveSnake(prevSnake, cols, rows, berry);

        // Handle game over
        if (isGameOver) {
          setScore(0);
          setBerry(getRandomBerryPosition(newSnake, cols, rows));
          return INITIAL_SNAKE;
        }

        // Handle berry eating
        if (ateBerry) {
          const newBerry = getRandomBerryPosition(newSnake, cols, rows);
          setBerry(newBerry);
          setScore((prevScore) => prevScore + 1);
        }

        return newSnake;
      });
    }, SNAKESPEED);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [berry, cols, rows]); // Recalculate if grid size changes

  return { snake, berry, score };
};