import { configureStore } from "@reduxjs/toolkit";
import monthSlice from "./monthSlice";
import toggleSlice from "./toggleSlice";

const store = configureStore({
  reducer: {
    month: monthSlice,
    toggle: toggleSlice,
  },
});

export default store;
