/* The code you provided is setting up a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` package. It also creates multiple slices using the `createSlice` function, which
allows you to define the initial state and reducers for each slice. */
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

const BagItemsSlice = createSlice({
    name: "BagItems",
    initialState: [],
    reducers: {
        setBagItems: (state, action) => {
            return [action.payload, ...state];
        },

        removeBagItems: (state, action) => {
            const newState = state.filter((currState) => currState.id !== action.payload.id);
            return newState;
        }
    }
});

const searchItemsSlice = createSlice({
    name: "SearchItems",
    initialState: [],
    reducers: {
        setSearchItems: (state, action) => {
            return action.payload;
        }
    }
})

const wishlistSlice = createSlice({
    name: "Wishlist",
    initialState: [],
    reducers: {
        setWishlist: (state, action) => {
            return [action.payload, ...state]
        },

        removeWishlist: (state, action) => {
            const newState = state.filter((currState) => currState.id !== action.payload.id);
            return newState;
        }
    }
})


const store = configureStore({
    reducer: {
        ProductItem: ProductItemSlice.reducer,
        BagItems: BagItemsSlice.reducer,
        SearchItems: searchItemsSlice.reducer,
        Wishlist: wishlistSlice.reducer
    }
})

export const {setProductItem} = ProductItemSlice.actions;
export const {setBagItems, removeBagItems} = BagItemsSlice.actions;
export const {setSearchItems} = searchItemsSlice.actions;
export const {setWishlist, removeWishlist} = wishlistSlice.actions;
export default store;