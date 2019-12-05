import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

import { fetchCollectionStart } from "./shop/shop.saga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default { store, persistor };
