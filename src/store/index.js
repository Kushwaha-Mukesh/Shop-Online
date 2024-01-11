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

const AddRemoveButtonSlice = createSlice({
    name: "addRemoveButton",
    initialState: true,
    reducers: {
        setAddRemoveButton: (state) => {
            return !state;
        }
    }
});


const store = configureStore({
    reducer: {
        ProductItem: ProductItemSlice.reducer,
        BagItems: BagItemsSlice.reducer,
        addRemoveButton: AddRemoveButtonSlice.reducer
    }
})

export const {setProductItem} = ProductItemSlice.actions;
export const {setAddRemoveButton} = AddRemoveButtonSlice.actions;
export const {setBagItems, removeBagItems} = BagItemsSlice.actions;
export default store;