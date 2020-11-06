import { createStore, applyMiddleware } from "redux";
import Reducers from "./reducers";
import Sagas from './sagas';

import createSagaMiddleware from "redux-saga";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createAppropriateStore = createStore;

const Store = createAppropriateStore(
  Reducers,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(Sagas);

export { Store };