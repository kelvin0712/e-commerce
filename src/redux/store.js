import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

const middleWare = [];

if (process.env.NODE_ENV === "production") {
  middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);

export default { store, persistor };
