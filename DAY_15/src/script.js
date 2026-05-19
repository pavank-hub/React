import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Stores from "./Stores";
import stores from "./Stores";
import Counting from "./Counting";
import CustomCounter from "./CustomCounter";

function App(){

    return (
        
        <Provider store={stores}>
        <Counting></Counting>
        <br></br>
        <br></br>
        <CustomCounter></CustomCounter>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)