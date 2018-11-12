import { takeLatest, call, put } from "redux-saga/es/effects";
import axios from "axios";
import { Constants } from "./../constants/constants";

function* articlesWorker() {
  try {
    const response = yield call(fetchArticles);
    const articles = response.data;
    console.log("response is ", articles);
    yield put({
      type: Constants.actions.articles.FETCH_ARTICLES_SUCCESS,
      articles
    });
  } catch (error) {
    yield put({
      type: Constants.actions.articles.FETCH_ARTICLES_FAILURE,
      error
    });
  }
}

function fetchArticles() {
  console.log("actual ajax call with axios");
  return axios({
    method: "get",
    url: "http://localhost:8080/api/article/all"
  });
}

export function* articlesSaga() {
  yield takeLatest(Constants.actions.articles.FETCH_ARTICLES, articlesWorker);
}
