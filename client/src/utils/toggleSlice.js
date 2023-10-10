import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isProfile: false,
    isEventOpen: false,
  },
  reducers: {
    setIsEventOpen: (state) => {
      state.isEventOpen = !state.isEventOpen;
    },
    setIsProfile: (state) => {
      state.isProfile = !state.isProfile;
    },
    setIsEventFalse: (state, action) => {
      state.isEventOpen = action.payload;
    },
  },
});

export const { setIsEventOpen, setIsEventMenuOpen, setIsEventFalse } =
  toggleSlice.actions;

export default toggleSlice.reducer;
