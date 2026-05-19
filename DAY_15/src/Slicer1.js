import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name: "slice1",
    initialState: {count:0}, // as an object bna rha hu
    reducers: {
        Increment: (state)=> {state.count= state.count+1},
        Decrement: (state)=> {state.count= state.count-1},
        Reset: (state)=> {state.count= 0},
        CustomIncreser: (state,action)=> {state.count+=action.payload}

    }

    // state ke andr initialState(latest object) yaani object(count:0) chla jayega.
})

export const {Increment, Decrement, Reset, CustomIncreser} = reactSlicer.actions;

export default reactSlicer.reducer;

// createSlice return an Object