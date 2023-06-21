import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/missions";

const fetchMissions = createAsyncThunk("missions/fetchMissions", async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});
export default fetchMissions;
