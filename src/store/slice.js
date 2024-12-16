import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category) => {
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&sort=relevance&api-key=${API_KEY}`);
    const data = await response.json();
    const result = data.response.docs;
    return result;
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
    Save: (state, action) => {
      const article = state.news.find((item) => item._id === action.payload);
      if (article && !state.save.some((saved) => saved._id === article._id)) {
        state.save.push(article);
      }
    },

    Unsave : (state, action) => {
      state.save = state.save.filter((item) => item._id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload
    });
  },
  
});

export const { Save, Unsave } = newsSlice.actions;
export default newsSlice.reducer;

