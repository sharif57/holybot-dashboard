
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../features/userSlice';
import { PolicyApi } from '../features/PolicySlice';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // Add userApi reducer
    [PolicyApi.reducerPath]: PolicyApi.reducer, // Add authApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, PolicyApi.middleware), 
});

export default store;