import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./reducer/postSlice";
import CardsReducer from "./reducer/cardsSlice"

export default configureStore({
  reducer: {
    posts: PostsReducer,
    cards: CardsReducer,
  },
});
