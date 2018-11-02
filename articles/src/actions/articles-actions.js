import { Constants } from "./../constants/constants";

export const addArticle = article => ({
  type: Constants.actions.articles.ADD_ARTICLE,
  payload: article
});
