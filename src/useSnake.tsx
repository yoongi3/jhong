import { useEffect, useRef, useState } from "react"

const SNAKESPEED = 500; // Milliseconds

const DIRECTIONS = [
    { x:1, y: 0},       // Right
    { x:-1, y: 0},      // Left
    { x:0, y: 1},       // Up
    { x:0, y: -1},      // Down
];

const INITIAL_SNAKE = [
    { x: 8, y: 7 }, 
    { x: 7, y: 7 }, 
    { x: 6, y: 7 }, 
    { x: 5, y: 7 }, 
    { x: 4, y: 7 },
    { x: 3, y: 7 },
    { x: 2, y: 7 },
    { x: 1, y: 7 },
]

export const useSnake = (gridSize: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [snake, setSnake] = useState<{x: number, y:number}[]>(INITIAL_SNAKE);

    const getRandomDirection = () => {
        const randomIndex = Math.floor(Math.random() * DIRECTIONS.length);
        return DIRECTIONS[randomIndex];
    }

    const isValidMove = (newHead: { x:number, y:number }) => {
        if (newHead.x < 0 || newHead.x > gridSize || newHead.y < 0 || newHead.y > gridSize)
            return false;

        for (let i=1; i<snake.length; i++){
            console.log( newHead, snake[i])
            if (newHead.x == snake[i].x && newHead.y == snake[i].y)
                return false;
        }
        return true;
    }

    useEffect(() => {
        if (intervalRef.current) return;

        const moveSnake = () => {
            let direction = getRandomDirection();
            let newHead = {
                x: snake[0].x + direction.x,
                y: snake[0].y + direction.y,
            };
            while (!isValidMove(newHead)){
                direction = getRandomDirection();
                newHead = {
                    x: snake[0].x + direction.x,
                    y: snake[0].y + direction.y,
                };
            }

            setSnake((prevSnake) => {
                return [newHead, ...prevSnake.slice(0,-1)];
            });
        };

        intervalRef.current = setInterval(moveSnake, SNAKESPEED)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    },[snake]);

    return {snake, setSnake};
};