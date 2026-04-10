import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1";

const stores = configureStore({
    reducer: {
        slice1 : slice1Reducer,
    }
})

// store ke andr slice aur reducer ko match karana hota hai bs

// slice name : Reducer(corresponding reducer)

export default stores;