import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;  
    font-family: 'Pixelify Sans', sans-serif;
}

html, body {
    height: auto; /* Let height adjust to content */
    min-height: 100vh; /* Ensure it still takes up the full screen if content is small */
    overflow-y: auto; /* Enable vertical scroll only if needed */
    overflow-x: hidden; /* Prevent horizontal scroll */
}

body {
    display: block;
    background-color: black;
}

#root {
    width: 100%;
    min-height: 100vh;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
}
`