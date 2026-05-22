import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./Slicer2";

export default function FoodCart({val}){

    const [inCart,setCart] = useState(false)
    const dispatch = useDispatch();
    function handleClick(){ 

        
        if(inCart){
            setCart(false);
            dispatch(removeItems());
        }
        else {
            setCart(true);
            dispatch(addItems());
        }
    }

    return(
        <>
        <h1>{val.food}</h1>
        <h2>{val.Price}</h2>
        <button onClick={handleClick}>{inCart?"Remove":"Add" }</button>
        </>
    )
}
