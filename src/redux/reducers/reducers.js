import { combineReducers } from "@reduxjs/toolkit";
import OriginalCountReducer from "./countReducer";
import { OriginalSelectedReducer } from "./selectedReducer";

const reducers = combineReducers({
  countReducer: OriginalCountReducer,
  selectedReducer: OriginalSelectedReducer,
});

export default reducers;
