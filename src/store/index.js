import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./reducer/postSlice";
import CardsReducer from "./reducer/cardsSlice";
import SearchReducer from "./reducer/searchSlice"

export default configureStore({
  reducer: {
    posts: PostsReducer,
    cards: CardsReducer,
    items: SearchReducer,
  },
});
