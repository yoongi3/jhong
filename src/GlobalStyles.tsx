import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;  /* Default text color */
    font-family: 'Arial', sans-serif; /* Default font family */
}

html, body {
    height: 100%;  /* Ensure full height for the document */
    overflow: hidden;  /* Prevent scrolling beyond the body */
}

body {
    display: block; /* Remove flexbox centering to allow grid to start from top */
    background-color: black;
    min-height: 100vh;  /* Ensures body takes full viewport height */
    overflow: hidden;  /* Ensure no scrolling occurs */
}

#root {
    width: 100%;
    min-height: 100vh;  /* Ensure grid can take full height if necessary */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content at the top of the page */
    align-items: center; /* Optional: keeps content centered horizontally */
}
`;