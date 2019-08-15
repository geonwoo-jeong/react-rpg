import produce from "immer";
import { PlayerInitialState } from "./states";
import {
  REQUEST_KEY_DOWN,
  REQUEST_KEY_LEFT,
  REQUEST_KEY_RIGHT,
  REQUEST_KEY_UP,
  REQUEST_KEY_LEFT_DOWN,
  REQUEST_KEY_LEFT_UP,
  REQUEST_KEY_RIGHT_DOWN,
  REQUEST_KEY_RIGHT_UP
} from "../../constraints";

const playerReducers = (state = PlayerInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case REQUEST_KEY_LEFT_UP:
        draft.positionX = state.positionX - 3;
        draft.positionY = state.positionY - 3;
        break;
      case REQUEST_KEY_LEFT_DOWN:
        draft.positionX = state.positionX - 3;
        draft.positionY = state.positionY + 3;
        break;
      case REQUEST_KEY_RIGHT_UP:
        draft.positionX = state.positionX + 3;
        draft.positionY = state.positionY - 3;
        break;
      case REQUEST_KEY_RIGHT_DOWN:
        draft.positionX = state.positionX + 3;
        draft.positionY = state.positionY + 3;
        break;
      case REQUEST_KEY_DOWN:
        draft.positionY = state.positionY + 3;
        break;
      case REQUEST_KEY_UP:
        draft.positionY = state.positionY - 3;
        break;
      case REQUEST_KEY_LEFT:
        draft.positionX = state.positionX - 3;
        break;
      case REQUEST_KEY_RIGHT:
        draft.positionX = state.positionX + 3;
        break;
      default:
    }
  });
};

export default playerReducers;
