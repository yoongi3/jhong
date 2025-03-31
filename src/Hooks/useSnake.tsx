import { useEffect, useRef, useState } from "react";
import { SNAKESPEED, INITIAL_SNAKE } from "../Snake/SnakeConstants";
import { getRandomBerryPosition, moveSnake } from "../Snake/SnakeLogic";
import { useGridSize } from "../Hooks/useGrid";
import { useScore } from "../Providers/ScoreProvider";

export const useSnake = () => {
  const { cols, rows } = useGridSize();

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const snakeRef = useRef<{ x: number; y: number }[]>(INITIAL_SNAKE);
  const [snakeRenderKey, setSnakeRenderKey] = useState(0);

  const [berry, setBerry] = useState<{ x: number; y: number }> (getRandomBerryPosition(INITIAL_SNAKE, cols, rows));

  const { incrementScore, resetScore } = useScore();

  // Snake movement and game logic
  useEffect(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const [newSnake, ateBerry, isGameOver] = moveSnake(
        snakeRef.current,
        cols,
        rows,
        berry
      );

      // Handle gameover
      if (isGameOver) {
        resetScore();
        setBerry(getRandomBerryPosition(INITIAL_SNAKE, cols, rows));
        snakeRef.current = INITIAL_SNAKE;
        setSnakeRenderKey((prev) => prev + 1);
        return;
      }

      // Handle berry
      if (ateBerry) {
        setBerry(getRandomBerryPosition(newSnake, cols, rows));
        incrementScore();
      }

      snakeRef.current = newSnake;

      setSnakeRenderKey((prev) => prev + 1);
    }, SNAKESPEED);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [berry, cols, rows]); 

  return { snake: snakeRef.current, berry, snakeRenderKey };
};