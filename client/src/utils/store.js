import { configureStore } from "@reduxjs/toolkit";
import monthSlice from "./monthSlice";
import toggleSlice from "./toggleSlice";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
const store = configureStore({
  reducer: {
    month: monthSlice,
    toggle: toggleSlice,
    user: userSlice,
    event: eventSlice,
  },
});

export default store;
