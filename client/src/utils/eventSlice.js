import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventData: [],
  },
  reducers: {
    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
  },
});

export const { setEventData } = eventSlice.actions;

export default eventSlice.reducer;
