import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: "javascript", content:'learn 3 months'},
    {id: '2', title: "reactjs", content:'learn 2 months'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})


export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer