import { createSlice } from "@reduxjs/toolkit";
import { logout, login, signup } from "./asyncActions";
import Cookies from 'js-cookie';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        isAuthenticated: !!Cookies.get('token'),
    } as 
    { 
      isAuthenticated: boolean;
    },
    reducers: {
      setIsAuthenticated: (state, action) => {state.isAuthenticated = action.payload}
    },
    extraReducers: (builder: any) => {
      builder.addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
      });
      builder.addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        console.log("in extrareducer logout", state.isAuthenticated)
      });
    },
  });
  export const selectAuth = (state: any) => state.authReducer.isAuthenticated;

  export const { setIsAuthenticated } = authSlice.actions;
  export default authSlice;