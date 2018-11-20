import { Constants } from "./../constants/constants";

const articles = (state = [{}], action) => {
  // debugger;
  switch (action.type) {
    case Constants.actions.articleActions.ADD_ARTICLE:
      return [...state, action.payload];

    case Constants.actions.articleActions.FETCH_ARTICLES_SUCCESS:
      console.log("response from the API is ", state, action);
      return [...action.articles];

    case Constants.actions.articleActions.FETCH_ARTICLES:
      console.log("fetch articles reducer", state);
      return state;
    default:
      return state;
  }
};

export default articles;
