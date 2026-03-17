import { useLocation } from "react-router";
const Home=()=>{
    const location=useLocation()
    console.log(location.state)
     console.log(location)
    return(
        <>
            <h1>Home page</h1>
            <p>Welcome home page slider</p>
        </>
    )
}
export default Home;