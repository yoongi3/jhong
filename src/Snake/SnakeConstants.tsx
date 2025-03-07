export const SNAKESPEED = 500; // Snakes movement speed - Milliseconds

const SNAKE_START_POSITION = [
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

export const DIRECTIONS = [ //
    { x:1, y: 0},       // Right
    { x:-1, y: 0},      // Left
    { x:0, y: -1},       // Up
    { x:0, y: 1},      // Down
];

export const INITIAL_SNAKE = [...SNAKE_START_POSITION];
