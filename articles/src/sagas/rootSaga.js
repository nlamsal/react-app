import { all, fork } from "redux-saga/effects";
import { articlesSaga } from "./articlesSaga";

function* rootSaga() {
  yield all([fork(articlesSaga)]);
}

export default rootSaga;
