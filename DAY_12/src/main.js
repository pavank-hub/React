import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";
import Details from "./component/Details";
import Hello from "./component/Hello";
import Hi from "./component/Hi";
import Zero from "./component/Zero";

function App(){
    return (
        <BrowserRouter>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/Contact" >Contact</Link>
            <Link to="/Dashboard" >Dashboard</Link>
            <Link to="/Details" >Details</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>} ></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>} ></Route>
            <Route path="/Details" element={<Details></Details>} >
            <Route index element={<Zero></Zero>} ></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hi" element={<Hi></Hi>}></Route>
            </Route>
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