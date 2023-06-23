import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./missions/missionsSlice";
import { reducer as rocketReducer } from "./rockets/rocketsSlice";

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer
  },
});
export default store;
