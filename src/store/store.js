import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "redux-logger/src";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
