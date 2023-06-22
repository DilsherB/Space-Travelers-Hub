import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api.spacexdata.com/v3/missions";

const fetchMissions = createAsyncThunk("missions/fetchMissions", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export default fetchMissions;
