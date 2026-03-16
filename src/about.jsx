import { useContext, useState } from "react"
import { UserContext } from "./context/userContext"

const About = () => {
    const [namem,setname]=useState('name')
    const data = useContext(UserContext)
    console.log(data)
    return (<>
        <h1 style={{backgroundColor:data==='light'?'white':'black',color:data==='light'?'black':'white'}}>Hello {data}{namem}</h1>
    </>)
}
export default About;