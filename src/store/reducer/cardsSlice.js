import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCard = createAsyncThunk("cards/getCard", ({num}) => {
    return fetch(`https://n36-blog.herokuapp.com/posts/bycategory?page=${num}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          categoryname: "All",
        },
    })
    .then(res => res.json())

})

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        loading: false,
    },
    extraReducers: {
        [getCard.pending]: (state) => {
            state.loading = true
        },
        [getCard.fulfilled]: (state, action) => {
            state.cards = action.payload
            state.loading = false
        },
        [getCard.rejected]: (state, action) => {
            state.loading = false
            state.cards = action.payload
        }
    }
})


export default cardsSlice.reducer