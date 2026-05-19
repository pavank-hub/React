1️⃣ script.js (Entry Point)
Code Purpose

Ye main file hai jahan React app start hota hai.

Simple Code Explanation:

import React from "react";
import ReactDOM from "react-dom/client";
React components banane ke liye.
ReactDOM browser me render karne ke liye.
import { Provider } from "react-redux";
import stores from "./Stores";

Redux store import kar rahe hain.


import Counting from "./Counting";

Counter component import kar rahe hain.

function App() {
    return (
        <Provider store={stores}>
            <Counting />
        </Provider>
    );
}

Hinglish:

Provider ke andar jitne bhi components honge,
un sabko Redux store access mil jayega.

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
App ko browser me render karta hai.

🎯 Key Points
Provider must wrap your components.
store={stores} dena mandatory hai.
Without Provider, useSelector aur useDispatch kaam nahi karenge.

2️⃣ Stores.js (Redux Store)
Purpose

Store = Central Warehouse of Data.

Code Explanation:

import { configureStore } from "@reduxjs/toolkit";
Redux store create karne ke liye.

import slice1Reducer from "./component/Slicer1";
Slice reducer import karte hain.

const stores = configureStore({
    reducer: {
        slice1: slice1Reducer,
    }
});

Hinglish:
slice1 key banayi.
Is key ke andar slice1Reducer ka state store hoga.
Final Global State Structure
{
  slice1: {
    count: 0
  }
}
🎯 Key Points:

configureStore() se store banta hai.
reducer object me key = state path.
slice1 key bahut important hai.


3️⃣ Slicer1.js (Slice)
Purpose

Yahan state aur actions define karte hain.

createSlice
const reactSlicer = createSlice({
    name: "slice1",
Slice ka naam.

initialState: { count: 0 },
Starting state.

reducers: {
Sare functions jo state change karenge.
Increment
Increment: (state) => {
    state.count = state.count + 1;
}


Meaning:

Count me 1 add.

Decrement
Decrement: (state) => {
    state.count = state.count - 1;
}
Meaning:

Count me 1 minus.

Reset
Reset: (state) => {
    state.count = 0;
}
Meaning:

Count ko zero.


Export Actions:

export const { Increment, Decrement, Reset } = reactSlicer.actions;
Actions export kiye.

Export Reducer:

export default reactSlicer.reducer;
Reducer export kiya.


🎯 Key Points
initialState = starting value.
reducers = state-changing functions.
actions dispatch ke liye.
reducer store me use hota hai.

4️⃣ Counting.js (UI Component)
Purpose

UI display aur button clicks handle karta hai.

useSelector
const count = useSelector((state) => state.slice1.count);
Hinglish:

Global state se count nikal rahe hain.

State Structure
state = {
  slice1: {
    count: 0
  }
}

So:

state.slice1.count
useDispatch
const dispatch = useDispatch();
Action bhejne ke liye.
UI
<h1>Counter is {count}</h1>

Count display karta hai.

Increment Button
<button onClick={() => dispatch(Increment())}>
Increment action dispatch karta hai.
Decrement Button
<button onClick={() => dispatch(Decrement())}>
Reset Button
<button onClick={() => dispatch(Reset())}>
🎯 Key Points
useSelector() → data read karta hai.
useDispatch() → action send karta hai.
dispatch(Action()) action trigger karta hai.
🧠 Complete Data Flow
Initial State
count = 0
User Clicks Increment
dispatch(Increment())
Reducer Runs
state.count = state.count + 1
New State
count = 1
UI Updates
Counter is 1
🔥 Important Terms
Term	Meaning
Store	Global data container
Slice	State + reducers
Reducer	Function that changes state
Action	Message to reducer
dispatch	Sends action
useSelector	Reads state
useDispatch	Sends actions
Provider	Makes store available
🎯 Exam Questions
1. What is Redux Store?

Central place where all application state is stored.

2. What is createSlice?

Function that creates state, reducers and actions.

3. What is useSelector?

Used to read data from Redux store.

4. What is useDispatch?

Used to send actions to Redux store.

5. What is Provider?

Makes Redux store available to all components.

📝 Super Short Revision
Provider → Store available globally
configureStore → Creates store
createSlice → Creates state + reducers + actions
useSelector → Reads state
useDispatch → Dispatches actions
dispatch(Increment()) → Increases count