// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'; // Import your auth slice reducer

const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
});

export default store;
