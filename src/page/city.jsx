import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
const City = ({ city }) => {
    const data = useParams()
    const navigate = useNavigate();
    const HandlerHome = () => {
        navigate('/home?location=mumbai&pl=25', { state: { name: 'rajesh', age: 25 } })
    }
    return (
        <>
            <h1>City page</h1>
            <p>Welcome {city} state {data.state} place: {data.place}</p>
            <button onClick={HandlerHome}>Home</button>

        </>
    )
}
export default City;