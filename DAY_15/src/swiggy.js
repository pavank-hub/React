import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./component2/Header";
import Card from "./component2/Card";
import Stores from "./component2/Stored";

function App(){

    return(
        <Provider store={Stores}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)