// App.jsx
import React from "react";
import Interview from "./Interview";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color:rgb(207, 207, 207);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Interview />
    </>
  );
}

export default App;
