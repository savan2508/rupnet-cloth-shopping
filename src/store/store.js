// import {
//   compose,
//   applyMiddleware,
//   legacy_createStore as createStore,
// } from "redux";
import {configureStore} from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
//
import {rootReducer} from "./root-reducer";
// import createSageMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";
//
// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };
//
// const sagaMiddleware = createSageMiddleware();
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const middleWares = [
//   process.env.NODE_ENV === "development" && logger,
//   sagaMiddleware,
// ].filter(Boolean);
//
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
//
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//
export const store = configureStore({
    reducer: rootReducer,
});
//
// sagaMiddleware.run(rootSaga);
//
// export const persistor = persistStore(store);
