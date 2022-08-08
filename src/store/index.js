import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./reducer/postSlice";

export default configureStore({
  reducer: {
    posts: PostsReducer,
  },
});
