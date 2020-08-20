// create store fro redux
import { createStore, applyMiddleware } from "redux";

// create middleware for redux-saga
import createSagaMiddleware from "redux-saga";

// import saga and reducers
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// create pur apps's store
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

// run redux-saga
sagaMiddleware.run(rootSaga);

export default store;
