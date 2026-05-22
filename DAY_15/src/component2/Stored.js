import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slicer2";

const Stores = configureStore({
    reducer: {
        slicer2: CartReducer
    }
})

export default Stores;