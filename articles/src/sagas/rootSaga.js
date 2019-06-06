import { all, fork } from "redux-saga/effects";
import { articlesSaga } from "./articlesSaga";
import { loginSaga } from "./loginSaga";

function* rootSaga() {
  yield all([fork(articlesSaga), fork(loginSaga)]);
}

export default rootSaga;
