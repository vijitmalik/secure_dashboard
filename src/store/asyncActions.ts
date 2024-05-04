import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { setIsAuthenticated } from './authSlice';

// Async action for user signup
export const signup = createAsyncThunk(
  'auth/signup',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      // Saving token to cookies.
      Cookies.set('token', data.token, 1);
      setIsAuthenticated(true);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for user login
export const login = createAsyncThunk(
  'auth/login',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      Cookies.set('token', data.token, 1);

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for logout
export const logout = createAsyncThunk('auth/logout', async () => {
  Cookies.remove('token');
});
