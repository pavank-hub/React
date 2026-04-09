import { useState, useEffect } from "react";


export default function useFetch(){

    const [Profile,setProfile] = useState([]);
    const [noOfProfile,setNoOfProfile] = useState("");

    async function generateProfile(count){
        let ran = Math.floor(1+Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
        // jb setProfile call hoga toh re-render karega ,... setProfle,Profile , noOfProfile, setNoOfProfile dekhega kaha kaha use huye ,
        // body m b use hua hai toh Body.js m jayega then usse re-render karega
    }

    useEffect(()=>{
        generateProfile(10);
    },[]);

    console.log("Custom Hook");

    return {generateProfile, noOfProfile, setNoOfProfile, Profile};
}