import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { createLogger } from "redux-logger";

import { rootReducer } from "./root-reducer";
import { thunk } from "redux-thunk";

const logger = createLogger({
  predicate: (getState, action) => action && action.type,
});

const middleWares = [thunk, logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
