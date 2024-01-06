import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//apicall

export const fetchapi = createAsyncThunk("fetchapi", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isLoading: true,
    isPending: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchapi.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(fetchapi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchapi.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { apicall } = counterSlice.actions;

export default counterSlice.reducer;
