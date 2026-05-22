import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1";

const Stores = configureStore({
    reducer: {
        slice1 : slice1Reducer,
    }
})

// store ke andr slice aur reducer ko match karana hota hai bs


// {type:"slice1/Increment" , playload: argument };

// slice name : Reducer(corresponding reducer)

export default Stores;