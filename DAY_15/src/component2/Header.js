import { useSelector } from "react-redux";

export default function Header(){

    const count = useSelector((state)=>state.slicer2.count)

    return(
        <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
        <h1>Swiggy</h1>
        <h2>Cart:({count}) </h2>
        </div>
    )
}

// useSelector((state)=>state.slicer2.count)
// above wale m, slicer2 (Slicer2 k FoodSlicer k name hai) 