import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: null,
  activeProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveProduct } = productSlice.actions;
export default productSlice.reducer;
