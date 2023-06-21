import { createSlice } from "@reduxjs/toolkit";
import fetchMissions from "./missionsAPI";

const initialState = {
  missionsArr: [],
  status: null,
};
export const MissionsSlice = createSlice({
  name: "missions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missionsArr = action.payload;
    });
  },
});

export default MissionsSlice.reducer;
