import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api.spacexdata.com/v3/missions";

export const fetchMissions = createAsyncThunk(
  "missions/fetchMissions",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    isLoading: true,
    error: "something went wrong",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.missions = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default missionsSlice.reducer;
