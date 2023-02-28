import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = [
        ...state.posts.filter((post) => post.id !== action.payload),
      ];
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );
      const newPosts = [...state.posts];

      newPosts[index] = action.payload;
      state.posts = [...newPosts];
    },
  },
});

export const { getPosts, addPost, deletePost, updatePost } = posts.actions;
export default posts.reducer;
