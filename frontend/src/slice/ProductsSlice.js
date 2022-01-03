import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productFetch = createAsyncThunk(
  "products/productsFetch", // this creates a middleware
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      return response?.data;
    } catch (error) {
      return rejectWithValue("error occured");
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )
  reducers: {},

  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
