import { Constants } from "./../constants/constants";
import { history } from "./../helper/history";

export const loginActions = {
  login,
  logout,
  success
};

function login(username, password) {
  console.log("called user action");
  return request({ username, password });
}

function logout() {
  history.push("/login");
  localStorage.clear();
}

function request(user) {
  return { type: Constants.actions.loginActions.LOGIN_REQUEST, payload: user };
}

function success(resp) {
  console.log("is this login success method called?");
  history.push("/");
  return { type: Constants.actions.loginActions.LOGIN_SUCCESS, resp };
}

function failure(error) {
  return { type: Constants.actions.loginActions.LOGIN_FAILURE, error };
}
