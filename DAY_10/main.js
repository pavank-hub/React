import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

// useMemo Hook
// 1: Counter button: increase
// 2: Input field: Fibonacci number


function fibo(n){
        if(n<=1) return n;
        return fibo(n-1) + fibo(n-2);
    }

function App(){

    const [count,setCount] = useState(0);
    const [number,setNumber] = useState("");
    // const [result,SetResult] = useState("");

    // fibonacci calculation
    // using useCallback
    const fibonacci = useCallback((n)=>{
        if(n<=1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    },[number]);

    const result = useMemo(()=>{
        return fibo(number)
    },[number]);
    
    // INSTEAD OF useMemo , also we can use useEffect and useState
    // useEffect sabse akhiri m chlta hai 
    // useEffect(()=>{
    //     SetResult(fibo(number));
    // },[number]);


    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>

        <div>
            <h1>Fibonacci number is: {result}</h1>
            <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}></input>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);