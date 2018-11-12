import { Constants } from "./../constants/constants";

export const addArticle = article => ({
  type: Constants.actions.articles.ADD_ARTICLE,
  payload: article
});

export function fetchArticles() {
  return {
    type: "FETCH_ARTICLES"
  };
}

// = () => ({
//   type: "FETCH_ARTICLES"
// });
