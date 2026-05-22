import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting(){

    const count = useSelector((state)=> state.slice1.count);
    // useSelector hook also known as Subscribing to the event , this hook used to update changes if made in count even though count variable updates in global or slicer1 file, IT DOESNOT NEED TO RE-RENDER
    
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