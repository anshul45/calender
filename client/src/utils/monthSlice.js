import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const monthSlice = createSlice({
  name: "month",
  initialState: {
    monthIndex: dayjs().month(),
  },
  reducers: {
    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload;
    },
  },
});

export const { setMonthIndex } = monthSlice.actions;

export default monthSlice.reducer;
