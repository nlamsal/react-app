import { Constants } from "./../constants/constants";

export const ajaxActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: Constants.actions.ajaxActions.SUCCESS, message };
}

function error(message) {
  return { type: Constants.actions.ajaxActions.FAILURE, message };
}

function clear() {
  return { type: Constants.actions.ajaxActions.CLEAR };
}
