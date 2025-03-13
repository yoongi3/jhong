import { DIRECTIONS, INITIAL_SNAKE } from "./SnakeConstants";

export const isValidMove = (newHead: { x: number, y: number }, snake: { x: number, y: number }[], gridWidth: number, gridHeight: number) => {
        if (newHead.x < 0 || newHead.x >= gridWidth || newHead.y < 0 || newHead.y >= gridHeight){
            return false;
        }

        for (let i=1; i<snake.length; i++){
            if (newHead.x == snake[i].x && newHead.y == snake[i].y)
                return false;
        }
        return true;
    }

export const getShuffledOrder = (excludeNumber: number) => { 
    let order = [0, 1, 2, 3].filter(num => num !== excludeNumber);

    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [order[i], order[j]] = [order[j], order[i]];
    }

    return order;
}

export const getOppositeDirection = (snake: { x: number, y: number }[]) => {
    const prevDirIndex = DIRECTIONS.findIndex((direction) => {
        return direction.x === snake[0].x - snake[1].x && direction.y === snake[0].y - snake[1].y;
    });

    // If odd (1 or 3), subtract 1; if even (0 or 2), add 1
    return (prevDirIndex + (prevDirIndex % 2 === 0 ? 1 : -1) + 4) % 4;
};

export const moveSnake = (snake: { x: number, y: number }[], gridWidth: number, gridHeight: number, berry: { x: number, y: number }): [{ x: number, y: number }[], boolean] => {
    // Single Direction Test

    // const direction = DIRECTIONS[2] // TEST CASES: 0:right, 1:left, 2:up, 3:down
    // let newHead = {
    //     x: prevSnake[0].x + direction.x,
    //     y: prevSnake[0].y + direction.y
    // }
    // if (isValidMove(newHead)){
    //     return[newHead, ...prevSnake.slice(0, -1)];
    // }
    const oppositeDirection = getOppositeDirection(snake);
    const randomOrder = getShuffledOrder(oppositeDirection);

    for (let i = 0; i < DIRECTIONS.length - 1; i++) {
        let direction = DIRECTIONS[randomOrder[i]];
        let newHead = {
            x: snake[0].x + direction.x,
            y: snake[0].y + direction.y,
        };

        if (isValidMove(newHead, snake, gridWidth, gridHeight)) {
            // Berry Collision - Add new head
            if (newHead.x === berry.x && newHead.y === berry.y){
                return [[newHead, ...snake], true]
            }
            // No Berry - Add new head and remove tail
            return [[newHead, ...snake.slice(0, -1)], false];
        }
    }
    return [INITIAL_SNAKE, false];
};

export const getRandomBerryPosition = (snake: { x: number; y: number }[], gridWidth: number, gridHeight: number) => {
    let position: { x:number, y: number };
    do {
        position = {
            x: Math.floor(Math.random() * gridWidth),
            y: Math.floor(Math.random() * gridHeight),
        };
    } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
    
    return position;
};