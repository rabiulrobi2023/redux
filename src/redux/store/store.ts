import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import logger from "../middleware/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
