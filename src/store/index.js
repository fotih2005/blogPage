import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./reducer/inputSlice";
import PostsReducer from "./reducer/postSlice";

export default configureStore({
  reducer: {
    posts: PostsReducer,
    post: inputSlice,
  },
});
