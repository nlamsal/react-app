import { Constants } from "./../constants/constants";

const login = (state = [], action) => {
  //   debugger;

  switch (action.type) {
    case Constants.actions.loginActions.LOGIN_REQUEST:
      return [...state, action.payload];

    case Constants.actions.loginActions.LOGIN_SUCCESS:
      console.log("response from the API is ", action);
      return [action.resp];
    default:
      return state;
  }
};

export default login;
