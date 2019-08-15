import React from "react";
import Map from "../map";
import styled from "styled-components";
import Background from "../background";
import { useDispatch } from "react-redux";
import {
  LEFT_KEY,
  RIGHT_KEY,
  UP_KEY,
  DOWN_KEY,
  REQUEST_KEY_DOWN,
  REQUEST_KEY_LEFT,
  REQUEST_KEY_UP,
  REQUEST_KEY_RIGHT,
  REQUEST_KEY_LEFT_DOWN,
  REQUEST_KEY_LEFT_UP,
  REQUEST_KEY_RIGHT_UP,
  REQUEST_KEY_RIGHT_DOWN
} from "../../constraints";

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: black;
`;

const World = () => {
  const dispatch = useDispatch();
  let keys = {};
  window.addEventListener("keyup", event => {
    keys[event.keyCode] = false;
  });

  window.addEventListener("keydown", event => {
    event.preventDefault();
    keys[event.keyCode] = true;

    switch (true) {
      case keys[RIGHT_KEY] && keys[UP_KEY]:
        dispatch({
          type: REQUEST_KEY_RIGHT_UP
        });
        break;
      case keys[RIGHT_KEY] && keys[DOWN_KEY]:
        dispatch({
          type: REQUEST_KEY_RIGHT_DOWN
        });
        break;
      case keys[LEFT_KEY] && keys[UP_KEY]:
        dispatch({
          type: REQUEST_KEY_LEFT_UP
        });
        break;
      case keys[LEFT_KEY] && keys[DOWN_KEY]:
        dispatch({
          type: REQUEST_KEY_LEFT_DOWN
        });
        break;
      case keys[LEFT_KEY]:
        dispatch({
          type: REQUEST_KEY_LEFT
        });
        break;
      case keys[RIGHT_KEY]:
        dispatch({
          type: REQUEST_KEY_RIGHT
        });
        break;
      case keys[UP_KEY]:
        dispatch({
          type: REQUEST_KEY_UP
        });
        break;
      case keys[DOWN_KEY]:
        dispatch({
          type: REQUEST_KEY_DOWN
        });
        break;
      default:
        console.log(keys);
    }
  });

  return (
    <Container>
      <Map />
      <Background />
    </Container>
  );
};

export default World;
