import { useContext } from "react"
import { UserContext } from "./context/userContext"

const About = () => {
    const data = useContext(UserContext)
    console.log(data)
    return (<>
        <h1 style={{backgroundColor:data==='light'?'white':'black',color:data==='light'?'black':'white'}}>Hello {data}</h1>
    </>)
}
export default About;