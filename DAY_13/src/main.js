import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Github from "./component/Github";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/Github/:name" element={<Github></Github>} ></Route>
             {/* /Github/:name , : colon ke baad jo b hai vo dynamically allot hoga */}
        </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// Routes se bahar wale visible ho rahe hai
// andr wale nhi ho rhe , aur ek time pr ek hi chlega (BrowserRouter ke andr hi likhna hoga)
// Link wale Home pr click karunga toh , to m jo hai
// uske path pr le jayega then path m jo element 
// hai usse show krega 

