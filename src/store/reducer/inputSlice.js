import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useFetch from "../../hooks/useFetch";

export const getPost = (value) => createAsyncThunk("post/getPosts",  () => {
    let getPost = useFetch(`https://n36-blog.herokuapp.com//posts?searchValue=${value}`)
    return getPost
});

const inputSlice = createSlice({
  name: "post",
  initialState: {
      post: [],
      loading: false,
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.loading = true
    },
    [getPost.fulfilled]: (state, action) => {
      state.post = action.payload
      state.loading = false;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.post = action.payload
    },
  },
});

export default inputSlice.reducer;
