import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {},
  },
  loginSuccess: (state, action) => {},
  loginFailure: (state) => {},
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
