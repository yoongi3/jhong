import { useEffect, useRef, useState } from "react"

const SNAKESPEED = 500; // Milliseconds

const DIRECTIONS = [
    { x:1, y: 0},       // Right
    { x:-1, y: 0},      // Left
    { x:0, y: -1},       // Up
    { x:0, y: 1},      // Down
];

const NORMAL_START = [
    { x: 8, y: 7 }, 
    { x: 7, y: 7 }, 
    { x: 6, y: 7 }, 
    { x: 5, y: 7 }, 
    { x: 4, y: 7 },
    { x: 3, y: 7 },
    { x: 2, y: 7 },
]

// const GAME_OVER_TEST = [
//     { x: 5, y: 6 }, 
//     { x: 5, y: 5 }, 
//     { x: 6, y: 5 }, 
//     { x: 6, y: 6 }, 
//     { x: 6, y: 7 }, 
//     { x: 6, y: 8 }, 
//     { x: 6, y: 9 }, 
//     { x: 5, y: 9 },
//     { x: 4, y: 9 },
//     { x: 4, y: 8 },
//     { x: 4, y: 7 },
//     { x: 4, y: 6 },
// ]

const INITIAL_SNAKE = [...NORMAL_START]

export const useSnake = (gridWidth: number, gridHeight: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [snake, setSnake] = useState<{x: number, y:number}[]>(INITIAL_SNAKE);

    const isValidMove = (newHead: { x:number, y:number }) => {
        if (newHead.x < 0 || newHead.x >= gridWidth || newHead.y < 0 || newHead.y >= gridHeight){
            return false;
        }

        for (let i=1; i<snake.length; i++){
            if (newHead.x == snake[i].x && newHead.y == snake[i].y)
                return false;
        }
        return true;
    }

    const getShuffledOrder = (excludeNumber: number) => { // TODO: exclude direction towards prevHead
        let order = [0, 1, 2, 3].filter(num => num !== excludeNumber);
    
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [order[i], order[j]] = [order[j], order[i]];
        }
    
        return order;
    }

    const getOppositeDirection = () => {
        const prevDirIndex = DIRECTIONS.findIndex((direction) => {
            return direction.x === snake[0].x - snake[1].x && direction.y === snake[0].y - snake[1].y;
        });
    
        // If odd (1 or 3), subtract 1; if even (0 or 2), add 1
        return (prevDirIndex + (prevDirIndex % 2 === 0 ? 1 : -1) + 4) % 4;
    };

    const moveSnake = () => {
        setSnake((prevSnake) => {
            // Single Direction Test

            // const direction = DIRECTIONS[2] // TEST CASES: 0:right, 1:left, 2:up, 3:down
            // let newHead = {
            //     x: prevSnake[0].x + direction.x,
            //     y: prevSnake[0].y + direction.y
            // }
            // if (isValidMove(newHead)){
            //     return[newHead, ...prevSnake.slice(0, -1)];
            // }
            const oppositeDirection = getOppositeDirection()
            console.log(oppositeDirection)
            const randomOrder = getShuffledOrder(oppositeDirection) // TODO: add a find opposite to previous move function

            for (let i = 0; i < DIRECTIONS.length - 1; i++){
                let direction = DIRECTIONS[randomOrder[i]]
                let newHead = {
                    x: prevSnake[0].x + direction.x,
                    y: prevSnake[0].y + direction.y,
                };

                if (isValidMove(newHead)){
                    return[newHead, ...prevSnake.slice(0, -1)];
                }
            }
            return INITIAL_SNAKE; // Restart
        });
    };

    useEffect(() => {
        if (intervalRef.current) return;

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