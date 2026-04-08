
import { useEffect } from "react"
import { useNavigate } from "react-router"
const Login = ({ setauth }) => {
    const navigate = useNavigate()
    const HandlerLogin = () => {
        localStorage.setItem('auth', { mobile: 8585859698, name: 'Rajesh' })
        setauth(true)
        navigate('/home')
    }
    useEffect(() => {
        const dataauth = localStorage.getItem('auth')
        if (dataauth != null) {
            navigate('/home')
        }
    })
    return (
        <>
            <h1>Login</h1>
            <button type="submit" onClick={HandlerLogin}>Login</button>
        </>
    )
}
export default Login;