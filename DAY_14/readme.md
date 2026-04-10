statelifting , most common ancestor m hum state create krte hai.

redux makes easier to handle statelifting
what happens in redux?
we make store (a global file that can be accessed by everyone)
state variable, logical function (functions also called as Reducer becoz they make easier to access and reduces my code) written in store 
function (logical algo) writen in store file
so to get access for example:
Decrement() ko call krne ke liye mujhe dispatch( ) k use krna pdega , decrement() store file ke andr hai toh direct access nhi le skte
toh yha dispatch help krta hai decrement() ko store file tk leke jaane ke liye.
Dispatch(Decrement())  aese likte hai 
Dispatch is just a hook


jab b hum Dispatch krte hai toh uske sath Slice(slice will be unquie) b attach hokr jata hai
jaha function name or state variable name same ho vha Slice kaam hota hai

<!--Redux  -->
npm install react-redux
npm install @reduxjs/toolkit

configureStore
createSlice
