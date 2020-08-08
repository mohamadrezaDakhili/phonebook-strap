import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
const midllewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...midllewares));
