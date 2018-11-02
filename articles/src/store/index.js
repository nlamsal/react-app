import configureStore from "./configureStore";

const initialState = {
  articles: [
    {
      title: "New Article",
      id: "4308cfc1…5dba792f",
      author: { name: "Neerajan Lamsal", id: "1" }
    }
  ]
};

const store = configureStore(initialState);

export default store;
