import { takeLatest, call, put } from "redux-saga/es/effects";
import axios from "axios";
import { Constants } from "./../constants/constants";

function* articlesWorker() {
  try {
    const response = yield call(fetchArticles);
    const articles = response.data;
    console.log(" response is ", articles);
    yield put({
      type: Constants.actions.articleActions.FETCH_ARTICLES_SUCCESS,
      articles
    });
  } catch (error) {
    yield put({
      type: Constants.actions.articleActions.FETCH_ARTICLES_FAILURE,
      error
    });
  }
}

function fetchArticles() {
  console.log("actual ajax call with axios");
  return axios({
    method: "get",
    url: "http://localhost:1000/api/article/all"
  });
}

export function* articlesSaga() {
  yield takeLatest("FETCH_ARTICLES", articlesWorker);
}
