import { takeLatest, put, call, select, take } from "redux-saga/es/effects";
import { Constants } from "./../constants/constants";
import LoginService from "./../service/loginService";
import { loginActions } from "../actions/login-action";

const loginService = new LoginService();

function* loginWorker(action) {
  try {
    const loginRequest = action.payload;
    console.log("login request is ");
    console.log(action.payload);
    const response = yield call(loginService.loginAjax, loginRequest);

    const resp = response.data;
    localStorage.setItem("user", JSON.stringify(resp));
    yield put(loginActions.success(resp));
  } catch (error) {}
}

export function* loginSaga() {
  yield takeLatest("LOGIN_REQUEST", loginWorker);
}
