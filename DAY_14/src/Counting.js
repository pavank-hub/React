import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting(){

    const count = useSelector((state)=> state.slice1.count);
    
    // above wale m global state mil chuka hai, 
    // global -> slice1 -> count (variable);

    const dispatch = useDispatch();

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=> dispatch(Increment())}>Increment</button>
        <button onClick={()=> dispatch(Decrement())}>Decrement</button>
        <button onClick={()=> dispatch(Reset())}>Reset</button>
        </>
    )
}