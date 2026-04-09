import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body(){

    console.log("Body First");
    const {generateProfile,noOfProfile,setNoOfProfile,Profile} = useFetch();
    console.log("Body Second");
    
    return(
        <div>
            <input type="text" className="input" placeholder="search here" value={noOfProfile} onChange={(e)=> setNoOfProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(noOfProfile))}>Search Profiles</button>
            <div className="profiles">
                {
                    Profile.map((value)=>{
                        return (
                        <div key={value.id}   className="cards">  
                        <img src={value.avatar_url}/>
                        <h2>{value.login}</h2> 
                        <a href={value.html_url} target="_blank">Profile</a>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Body;