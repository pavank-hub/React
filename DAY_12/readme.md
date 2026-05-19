1. Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";

Key Points:
React → JSX likhne ke liye.
ReactDOM → App ko browser mein render karne ke liye.
BrowserRouter → Routing enable karta hai.
Routes → Sare routes ka container.
Route → Ek specific path define karta hai.
Link → Page reload ke bina navigation karta hai.

2. Components Import
import Home from "./component/Home";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";
import Details from "./component/Details";
import Hello from "./component/Hello";
import Hi from "./component/Hi";
import Zero from "./component/Zero";

Key Points:
Har page ke liye alag component banaya gaya hai.

Component	Purpose
Home	Home page
Contact	Contact page
Dashboard	Dashboard page
Details	Parent page
Zero	Default child page ..
Hello	Nested child
Hi	Nested child


3. App Component

function App() {

Yeh main component hai jisme pura routing system likha hai.

4. BrowserRouter

<BrowserRouter>

Simple Meaning:

Pure application ko routing support dene ke liye wrap karte hain.

Yaad Rakhne Wali Line:

BrowserRouter ke andar hi Routes aur Link likhne hote hain.

5. Navigation Bar

<nav>
    <Link to="/">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Details">Details</Link>
</nav>

Link ka Kaam:

to attribute jis URL par le jana hai wo batata hai.

Example:

<Link to="/Contact">Contact</Link>

Click karne par URL /Contact ho jayega aur Contact component show hoga.

6. Routes Container

<Routes>

Iske andar sabhi Route define hote hain.


7. Basic Routes

<Route path="/" element={<Home />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Dashboard" element={<Dashboard />} />
Simple Meaning:
URL / → Home component
URL /Contact → Contact component
URL /Dashboard → Dashboard component
8. Nested Route (Parent Route)
<Route path="/Details" element={<Details />}>

Details parent component hai.

URL:
/Details
/Details/Hello
/Details/Hi

Sabse pehle Details render hoga, uske andar child components show honge.

9. Index Route (Default Child)
<Route index element={<Zero />} />
Meaning:

Jab sirf /Details open karo, tab Zero component automatically show hoga.

Example:
/Details → Details + Zero
10. Child Route – Hello
<Route path="Hello" element={<Hello />} />
URL:

/Details/Hello

Output:

Details + Hello

11. Child Route – Hi
<Route path="Hi" element={<Hi />} />
URL:

/Details/Hi

Output:

Details + Hi

12. Render App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
Meaning:

App component ko root div ke andar display karo.

13. Nested Routing Important Point

Nested routes tabhi dikhenge jab parent component (Details.jsx) ke andar:

import { Outlet } from "react-router";

function Details() {
  return (
    <div>
      <h1>Details Page</h1>
      <Outlet />
    </div>
  );
}
Outlet Ka Kaam:

Child routes ko show karta hai.

14. Execution Flow
User Clicks:
<Link to="/Dashboard">Dashboard</Link>
Process:
URL changes to /Dashboard
Matching route found
<Dashboard /> component render hota hai
15. URL Mapping Summary
URL	Component Shown
/	Home
/Contact	Contact
/Dashboard	Dashboard
/Details	Details + Zero
/Details/Hello	Details + Hello
/Details/Hi	Details + Hi
16. Route Matching Rule

Ek time par sirf matching route ka component render hota hai.

17. Important Concepts
BrowserRouter

Routing enable karta hai.

Link

Navigation without page refresh.

Routes

All routes ka container.

Route

Path aur component mapping.

Nested Route

Parent ke andar child route.

Index Route

Default child route.

Outlet

Child route display karta hai.

18. Link + Route Together
<Link to="/contact">Contact</Link>

<Route path="/contact" element={<Contact />} />

Flow:
User clicks Link.
URL changes to /contact.
React Router checks all Routes.
Matching path found.
<Contact /> component render hota hai.

19. Final Revision Formula
BrowserRouter
   ├── Link
   └── Routes
         └── Route(path → component)
                 └── Nested Route
                         ├── index
                         └── child routes
Final One-Line Summary

Yeh code React Router ka use karke different URLs ko different components se map karta hai aur nested routing ke through parent-child pages display karta hai.