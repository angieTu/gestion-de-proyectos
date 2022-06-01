import { combineReducers } from "redux";

import { projectReducer } from "./projectReducers";

const rootReducer = combineReducers({
  projectReducer,
});

export default rootReducer;
