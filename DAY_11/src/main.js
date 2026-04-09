import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import Increment from "./component/Increment";
import Decrement from "./component/Decrement";
import Third from "./component/third";
import GlobalContext from "./component/global";

function App(){

    const [count,setCount] = useState(0);

    return(
        <div>
            <GlobalContext.Provider value={{count,setCount}} >
            <h1>Parent Counter is : {count}</h1>
            <Increment/>
            <Decrement/>
            </GlobalContext.Provider>
            <Third></Third>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);