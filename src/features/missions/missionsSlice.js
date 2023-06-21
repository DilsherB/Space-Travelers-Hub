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
      //   const result = Object.keys(action.payload).map((key) => ({
      //     mission_id: key,
      //     mission_name: action.payload[key].mission_name,
      //     description: action.payload[key].description,
      //   }));
      //   state.missionsArr = result;
      //   state.status = "success";
      state.missionsArr = action.payload;
    });
  },
});

export default MissionsSlice.reducer;
