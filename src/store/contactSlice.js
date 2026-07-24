import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitContact = createAsyncThunk(
  "contact/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://w3webtechnologies.com/blog/wp-json/w3web/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);

const contactSlice = createSlice({
  name: "contact",

  initialState: {
    loading: false,
    success: false,
    error: null,
  },

  reducers: {
    clearContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })

      .addCase(submitContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error =
          action.payload || { message: "Something went wrong." };
      });
  },
});

export const { clearContactState } = contactSlice.actions;

export default contactSlice.reducer;