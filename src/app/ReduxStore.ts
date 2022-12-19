import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces/Post";

interface PostState {
  listPosts: Array<Post>;
  height: number;
}

const postSlice = createSlice({
  name: 'store',
  initialState: {
    listPosts: [],
    height: 12
  } as PostState,
  reducers: {
    setPost: (state, action: PayloadAction<Array<Post>>) => {
      state.listPosts = action.payload
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.listPosts.splice(action.payload, 1)
    }

  }
})


export const { setPost, deletePost } = postSlice.actions

export const store = configureStore({
  reducer: postSlice.reducer
})
