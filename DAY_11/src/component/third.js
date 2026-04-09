import GlobalContext from "./global";
import { useContext } from "react";

export default  function Third(){

    const data = useContext(GlobalContext);

    return (
        <>
        <h2>I am playing {data}</h2>
        </>
    )
}