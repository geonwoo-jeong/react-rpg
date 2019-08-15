import { combineReducers } from "redux";
import playerReducers from "./player/reducers";

const rootReducers = combineReducers({
  player: playerReducers
});

export default rootReducers;
