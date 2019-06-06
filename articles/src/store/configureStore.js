import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./../reducers/rootReducer";
import createSagaMiddleWare from "redux-saga";

const sagaMiddleware = createSagaMiddleWare();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      reduxDevTools
    )
  );
};



export default configureStore;
