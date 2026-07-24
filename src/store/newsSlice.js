import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/* =========================
   FETCH ALL NEWS
========================= */
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/news`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* =========================
   FETCH SINGLE NEWS
========================= */
export const fetchSingleNews = createAsyncThunk(
  'news/fetchSingleNews',
  async (slug, { rejectWithValue }) => {
  
    try {
      const response = await axios.get(`${BASE_URL}/api/news/slug/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* =========================
   SLICE
========================= */
const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    singleArticle: null,
    loading: false,
    error: null,
  },
  reducers: {
    // optional reset (useful when changing pages)
    clearSingleArticle: (state) => {
      state.singleArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ===== FETCH ALL ===== */
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== FETCH SINGLE ===== */
      .addCase(fetchSingleNews.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleArticle = null;
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.loading = false;
        state.singleArticle = action.payload;
      })
      .addCase(fetchSingleNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleArticle } = newsSlice.actions;

export default newsSlice.reducer;