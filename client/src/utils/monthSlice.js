import { createSlice } from "@reduxjs/toolkit";
import { getMonth } from "../utils/helper";
import dayjs from "dayjs";

const monthSlice = createSlice({
  name: "month",
  initialState: {
    monthIndex: dayjs().month(),
    currentMonth: getMonth(),
    smallCalenderMonthIndex: dayjs().month(),
    smallCalenderCurrentMonth: getMonth(),
    daySelected: null,
  },
  reducers: {
    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload;
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = getMonth(action.payload);
    },
    setSmallCalenderMonthIndex: (state, action) => {
      state.smallCalenderMonthIndex = action.payload;
    },
    setSmallCalenderCurrentMonth: (state, action) => {
      state.smallCalenderCurrentMonth = getMonth(action.payload);
    },
    setDaySelected: (state, action) => {
      state.daySelected = action.payload;
    },
  },
});

export const {
  setMonthIndex,
  setCurrentMonth,
  setSmallCalenderCurrentMonth,
  setSmallCalenderMonthIndex,
  setDaySelected,
} = monthSlice.actions;

export default monthSlice.reducer;
