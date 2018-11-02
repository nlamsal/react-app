import { Constants } from "./../constants/constants";

const articles = (state = [{}], action) => {
  // debugger;
  switch (action.type) {
    case Constants.actions.articles.ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articles;
