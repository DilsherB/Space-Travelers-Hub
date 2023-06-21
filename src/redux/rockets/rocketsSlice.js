import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const rocketsSlice = createSlice({
  initialState,
  reducers: {},
  extraReducers: {},
});

export default rocketsSlice;
export const { actions, reducer } = rocketsSlice;
