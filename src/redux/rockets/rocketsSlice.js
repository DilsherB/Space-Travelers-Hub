import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./thunks";

const initialState = {
  rockets: [],
  error: undefined,
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    reserve: (state, { payload }) => {
      const newData = state.rockets.map((rocket) => {
        if (rocket.id === payload.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });

      state.rockets = newData;
    },
    cancel: (state, { payload }) => {
      const newData = state.rockets.map((rocket) => {
        if (rocket.id === payload.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });

      state.rockets = newData;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      const data = payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images[0],
        description: rocket.description,
        reserved: false,
      }));
      state.rockets = data;
    });

    builder.addCase(fetchData.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export default rocketsSlice;
export const { actions, reducer } = rocketsSlice;
