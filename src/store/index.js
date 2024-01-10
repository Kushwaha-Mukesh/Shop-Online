import { configureStore, createSlice } from "@reduxjs/toolkit";

const ProductItemSlice = createSlice({
    name: "ProductItem",
    initialState: [],
    reducers: {
        setProductItem: (state, action) => {
            return action.payload;
        }
    }
});


const store = configureStore({
    reducer: {
        ProductItem: ProductItemSlice.reducer
    }
})

export const {setProductItem} = ProductItemSlice.actions;
export default store;