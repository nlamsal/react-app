import { combineReducers } from "redux";
import articles from "./articleReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({ login, articles });

export default rootReducer;
