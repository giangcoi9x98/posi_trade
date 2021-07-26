import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState } from 'redux/types';

const initialState: OrderState = { openOrderData: [] };

export const ordersSlice = createSlice({
  name: 'Orders',
  initialState,
  reducers: {
    addToOpenOrder: (state, action: PayloadAction<any>) => {
      return [...state.openOrderData, action.payload];
    },
  },
});

export const { addToOpenOrder } = ordersSlice.actions;

export const addDataToOpenOrder = (value: any) => async (dispatch: any) => {
  await dispatch(addToOpenOrder(value));
};
