import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()
  ));
  sagaMiddleware.run(watcherSaga)
export default store;