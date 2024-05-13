import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://661e402098427bbbef03ee99.mockapi.io";
const perPage = 12;

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?limit=${perPage}&page=${page}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
