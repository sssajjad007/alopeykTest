import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ActiveOrders = {
  categoryName: string;
  productName: string;
  productPrice: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
};
type State = {
  ActiveOrders: ActiveOrders;
};

const initialState: State = {
  ActiveOrders: {
    categoryName: '',
    productName: '',
    productPrice: 0,
    coordinates: {
      latitude: '',
      longitude: '',
    },
  },
};
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setActiveOrders: (state, action: PayloadAction<ActiveOrders>) => {
      state.ActiveOrders = action.payload;
    },
    removeActiveOrders: (state) => {
      state.ActiveOrders = {
        categoryName: '',
        productName: '',
        productPrice: 0,
        coordinates: {
          latitude: '',
          longitude: '',
        },
      };
    },
  },
});

export default orderSlice.reducer;

export const { setActiveOrders, removeActiveOrders } = orderSlice.actions;
