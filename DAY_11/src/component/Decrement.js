import GlobalContext from "./global";
import { useContext } from "react";

export default function Decrement(){

    const {count,setCount} = useContext(GlobalContext)
    return (
        <>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </>
    )
}