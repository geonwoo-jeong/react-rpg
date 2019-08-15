import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
) as any;

export default store;
