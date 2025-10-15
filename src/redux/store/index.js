import { configureStore } from "@reduxjs/toolkit";
import countReduOrigin from "../reducer";

const store = configureStore({
  reducer: {
    mainRedu: countReduOrigin,
  },
});
export default store;
