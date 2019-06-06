import axios from "axios";
import { put, call } from "redux-saga/es/effects";
import { Constants } from "./../constants/constants";

class LoginService {
  // *login(action) {
  //   const loginRequest = action.payload;
  //   console.log("login request is ");
  //   console.log(action.payload);
  //   const response = yield call(this.loginAjax, loginRequest);

  //   const resp = response.data;
  //   console.log("response is ", resp);
  //   localStorage.setItem("user", JSON.stringify(resp));
  //   yield put({
  //     type: Constants.actions.articles.FETCH_ARTICLES_SUCCESS,
  //     resp
  //   });
  // }

  loginAjax(user) {
    console.log("making ajax call");
    return axios({
      method: "post",
      url: "http://localhost:8080/api/login",
      data: user
    });
  }
}

export default LoginService;
