import { useEffect, useState } from "react";
import { useLocation } from "react-router";
const Home=()=>{
    const location=useLocation()
    console.log(location.state)
     console.log(location)
    const [data,setdata]=useState(null)
    useEffect(()=>{
        const datalocal=localStorage.getItem('userdetails')
        const sessdata=sessionStorage.getItem('userdata')
        console.log(sessdata)
        console.log(JSON.parse(datalocal))
    })
    return(
        <>
            <h1>Home page</h1>
            <p>Welcome home page slider</p>
        </>
    )
}
export default Home;