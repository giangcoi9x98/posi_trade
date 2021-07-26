import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from '../types';

// Define the initial state using that type
const initialState: GlobalState = {
  value: 0,
};
export const globalSlice = createSlice({
  name: 'global', // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});
export const {} = globalSlice.actions;

// export const selectCount = (state: RootState) => state.global.value;
export default globalSlice.reducer;
