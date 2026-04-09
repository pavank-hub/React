import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";


function Stopwatch(){
    
    const [time,setTime] = useState(0);
    const intervalRef = useRef(null);
    const [isRunning,setIsRunning] = useState(false);


function start(){
    if(!isRunning){
    intervalRef.current = setInterval(() => {
        setTime((prevTime)=>prevTime+1);
        // console.log(time);
    }, 1000)
    setIsRunning(true);
}
}

function stop(){
    if(isRunning){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setIsRunning(false);
    }
}
 
function reset(){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTime(0);
}
    return (
        <div id="heading">
        <h1> StopWatch is : {time}</h1>
        <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Restart</button>
        </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>);