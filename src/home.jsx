import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const Home=()=>{
    const data=useContext(UserContext)
    console.log(data)
    return(
        <>
        <h1 style={{backgroundColor:data==='light'?'white':'black',color:data==='light'?'black':'white'}}>Hello Home {data}</h1>
        </>
    )
}
export const HomeTwo=()=>{
    return(
        <>
        <h1>Hello Home</h1>
        </>
    )
}