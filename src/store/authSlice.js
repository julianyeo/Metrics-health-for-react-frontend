import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userLogined: (state, action) => {
      state.isAuthenticate = true;
      state.loading = false;
      state.user = action.payload;
    },
    userRegister: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    userLoginSuccess: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    userLogout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    userAuthError: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  userLogined,
  userLoginSuccess,
  userLogout,
  userRegister,
  userAuthError,
} = authReducer.actions;

export default authReducer.reducer;
