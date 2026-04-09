import { useContext } from "react"
import GlobalContext from "./global"

export default function Increment(){

    const {count,setCount} = useContext(GlobalContext);

    return (
        <>
            <h2>Child Counter is {count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </>
    )
}