import { Link, Outlet } from "react-router"

export default function Details(){

    return (
        <>
        <nav>
            <Link to="/Details" >Details</Link>
            <Link to="Hello" >Hello</Link>
            <Link to="Hi" >Hi</Link>
        </nav>
        
        <h1>Welcome to Details Page</h1>
        <Outlet></Outlet>
        </>

    )
}

// Details mein by default , zero b khul jaaye
// Zero wale ko render b karana hoga , uske liye ayega outlet