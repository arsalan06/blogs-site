// blogSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  blogs: [],
  existingBlogs: [],
  singleBlog: null,
  status: 'idle',
  statusTwo: 'idle',
  error: null
};

// Define a thunk using createAsyncThunk to fetch all blogs
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/');
  return response.data;
});

// Define a thunk using createAsyncThunk to fetch all blogs
export const addBlogsViews = createAsyncThunk('blogs/addBlogsViews', async (blogs) => {
  return blogs;
});
// Define a thunk using createAsyncThunk to fetch a single blog by ID
export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (blogId) => {
  const response = await axios(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${blogId}`);
  return response.data;
});

// Define the slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // Other synchronous reducers can be defined here
  },
  extraReducers: (builder) => {
    builder
      // Reducers for fetching all blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Reducers for add blogs views
      .addCase(addBlogsViews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.existingBlogs = action.payload;
      })
      // Reducers for fetching a single blog by ID
      .addCase(fetchBlogById.pending, (state) => {
        state.statusTwo = 'loading';
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.statusTwo = 'succeeded';
        state.singleBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.statusTwo = 'failed';
        state.error = action.error.message;
      });
  }
});

// Export reducer
export default blogSlice.reducer;
