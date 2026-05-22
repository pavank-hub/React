import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Stores from "./component/Stores";
import Counting from "./component/Counting";
import CustomCounter from "./component/CustomCounter";

function App(){

    return (
        
        <Provider store={Stores}>
        <Counting></Counting>
        <br></br>
        <br></br>
        <CustomCounter></CustomCounter>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)