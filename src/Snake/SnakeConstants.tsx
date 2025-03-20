export const SNAKESPEED = 200; // Snakes movement speed - Milliseconds

const SNAKE_START_POSITION = [
    { x: 15, y: 7 }, 
    { x: 14, y: 7 }, 
    { x: 13, y: 7 }, 
    { x: 12, y: 7 }, 
    { x: 11, y: 7 },
    { x: 10, y: 7 },
    { x: 9, y: 7 },
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
