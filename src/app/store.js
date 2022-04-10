import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from '../reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
