import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface ProductsState {
  products: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = () => async (dispatch: any) => {
  dispatch(fetchProductsPending());
  try {
    const response = await axios.get(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    dispatch(fetchProductsSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchProductsFailure(error.message));
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
