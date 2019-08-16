import React, { useState, useEffect } from "react";
import World from "./components/world";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Provider, useDispatch } from "react-redux";
import store from "./store/configureStore";
import GameEngine from "./classes/GameEngine";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @keyframes background-animate {
    from {
      background-position: 0 0;
    } to {
      background-position: 100000% 0;      
    }
  }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <World />
      </Container>
    </Provider>
  );
};

export default App;
