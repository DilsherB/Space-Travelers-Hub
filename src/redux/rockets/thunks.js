import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk(
  "rockets/fetchData",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get("https://api.spacexdata.com/v3/rockets");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
