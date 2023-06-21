import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./features/missions/missionsAPI";

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});
export default store;
