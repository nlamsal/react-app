import { Constants } from "./../constants/constants";

const articles = (state = [{}], action) => {
  // debugger;
  switch (action.type) {
    case Constants.actions.articles.ADD_ARTICLE:
      return [...state, action.payload];

    case Constants.actions.articles.FETCH_ARTICLES_SUCCESS:
      console.log("response from the API is ", state, action);
      return [...state, ...action.articles];
    default:
      return state;
  }
};

export default articles;
