import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);

export default { store, persistor };
