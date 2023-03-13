import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import postSlice from "../features/posts/postSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postSlice,
    }
})