import configureStore from "./configureStore";

const initialState = {
  articles: [{ title: "New Article", id: "4308cfc1…5dba792f" }],
  authors: [{ authorName: "Neerajan Lamsal", id: "4308cfc1…5dba792f" }]
};

const store = configureStore(initialState);

export default store;
