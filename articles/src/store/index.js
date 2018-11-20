import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from "./../sagas/rootSaga";
import rootReducer from "./../reducers/rootReducer";
import createSagaMiddleWare from "redux-saga";

const sagaMiddleware = createSagaMiddleWare();

const initialState = {
  articles: [
    // {
    //   title: "",
    //   id: "",
    //   author: { name: "", id: "" }
    // }
  ]
};

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./../reducers/rootReducer";
// import createSagaMiddleWare from "redux-saga";

// const sagaMiddleware = createSagaMiddleWare();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = (initialState = []) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      reduxDevTools
    )
  );
};

const store = configureStore(initialState);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
