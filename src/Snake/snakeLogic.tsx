import { DIRECTIONS } from "./SnakeConstants";


// Calculate Manhattan distance to the berry
const getManhattanDistance = (point: { x: number, y: number }, berry: { x: number, y: number }) => {
    return Math.abs(point.x - berry.x) + Math.abs(point.y - berry.y);
};

// Check if the move is valid (no collision with the grid bounds or snake's body)
export const isValidMove = (newHead: { x: number, y: number }, snake: { x: number, y: number }[], gridWidth: number, gridHeight: number) => {
    if (newHead.x < 0 || newHead.x >= gridWidth || newHead.y < 0 || newHead.y >= gridHeight) {
        return false;
    }

    for (let i = 1; i < snake.length; i++) {
        if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
            return false;
        }
    }
    return true;
};

// Get the fastest move (towards the berry, avoiding collision)
export const getGreedyMove = (snake: { x: number, y: number }[], berry: { x: number, y: number }, gridWidth: number, gridHeight: number) => {
    const head = snake[0];
    let bestMove = null;
    let minDistance = Infinity;

    // Check all 4 directions
    for (let i = 0; i < DIRECTIONS.length; i++) {
        const direction = DIRECTIONS[i];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        if (isValidMove(newHead, snake, gridWidth, gridHeight)) {
            const distanceToBerry = getManhattanDistance(newHead, berry);

            if (distanceToBerry < minDistance) {
                minDistance = distanceToBerry;
                bestMove = direction;
            }
        }
    }

    // Return the best move (or null if no valid move is found)
    return bestMove;
};

// Move the snake based on greedy algorithm and berry collection
export const moveSnake = (snake: { x: number, y: number }[], gridWidth: number, gridHeight: number, berry: { x: number, y: number }): [{ x: number, y: number }[], boolean, boolean] => {
    const bestMove = getGreedyMove(snake, berry, gridWidth, gridHeight);

    if (!bestMove) {
        return [snake, false, true]; // Game over if no valid move available
    }

    const newHead = { x: snake[0].x + bestMove.x, y: snake[0].y + bestMove.y };
    const newSnake = [newHead, ...snake.slice(0, snake.length - 1)];

    // Check if the snake eats the berry
    if (newHead.x === berry.x && newHead.y === berry.y) {
        return [[newHead, ...snake], true, false];
    }

    // No berry eaten, just move and remove the tail
    return [newSnake, false, false];
};

// Get a random berry position (ensures it doesn't spawn on body)
export const getRandomBerryPosition = (snake: { x: number; y: number }[], gridWidth: number, gridHeight: number) => {
    let position: { x: number, y: number };
    do {
        position = {
            x: Math.floor(Math.random() * gridWidth),
            y: Math.floor(Math.random() * gridHeight),
        };
    } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
    
    return position;
};