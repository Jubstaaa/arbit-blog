import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";
import auth from "./auth";
const store = configureStore({
  reducer: {
    posts,
    auth,
  },
});

export default store;
