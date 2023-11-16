import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitalInfo: localStorage.getItem("hospitalInfo")
    ? JSON.parse(localStorage.getItem("hospitalInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.hospitalInfo = action.payload;
      localStorage.setItem("hospitalInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.hospitalInfo = null;
      localStorage.removeItem("hospitalInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
