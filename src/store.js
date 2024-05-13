import { configureStore } from "@reduxjs/toolkit";
import dealsReducer from "./dealsReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    deals: dealsReducer,
  },
});

export default store;
