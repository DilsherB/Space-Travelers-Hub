import { createSlice } from "@reduxjs/toolkit";
import fetchMissions from "./missionsAPI";

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    isLoading: true,
    error: "something went wrong",
  },
  reducers: {
    join: (state, { payload }) => {
      const newData = state.missions.map((mission) => {
        if (mission.id === payload.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });

      state.missions = newData;
    },
    leave: (state, { payload }) => {
      const newData = state.missions.map((mission) => {
        if (mission.id === payload.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      state.missions = newData;
    },
  },
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
