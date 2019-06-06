import { takeLatest, put, call, select, take } from "redux-saga/es/effects";
import { Constants } from "./../constants/constants";
import LoginService from "./../service/loginService";
import { loginActions } from "../actions/login-action";
import { history } from "../helper/history";

const loginService = new LoginService();

function* loginWorker(action) {
  try {
    const loginRequest = action.payload;
    console.log("login request is ");
    console.log(action.payload);
    const response = yield call(loginService.loginAjax, loginRequest);

    const resp = response.data;
    console.log("response from the API is , ", response);
    localStorage.setItem("user", JSON.stringify(resp));
    //  console.log("user object just set is : ", localStorage.getItem("user"));
    yield put(loginActions.success(resp));
    //yield put(history.push("/"));
  } catch (error) {
    console.log("error occurred, ", error);
  }
}

export function* loginSaga() {
  yield takeLatest("LOGIN_REQUEST", loginWorker);
}
