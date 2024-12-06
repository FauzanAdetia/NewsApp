import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_SOME_KEY;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category) => {
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&sort=relevance&api-key=${API_KEY}`);
    const data = await response.json();
    return data.response.docs;
  
  }
);

const initialState = {
  news: [],
  save: []
};


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload
    });
  }
});


export default newsSlice.reducer;

