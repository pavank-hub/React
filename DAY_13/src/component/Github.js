import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Github(){

    // const data = useParams();
    // console.log(data);
    // useParams return an object in which name is present
    // to display name use const {name} = useParams
    // console.log(name);

    const {name} = useParams();
    // console.log(name); 
    const [Profile,setProfile] = useState(null);

    async function fetchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        fetchuser();
    },[]);

    // if(!Profile){
    //     return (<h2>Loading...</h2>)
    // }
    //Step 1
    // Above step is neccessary becoz if Profile is null ,
    // the  Profile.avata_url doesnt make any sense


    return(
        <>
        <h1>My Github Profile</h1>
        {/* Display the user data */}
        <div>
            {/* or Step 2 is put question mark in the end of Profile becoz its pointing to null right.
            It determines if Profile isn't null then avatar_url and login runs either isn't it. */}
            <img src={Profile?.avatar_url} ></img>
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
} 