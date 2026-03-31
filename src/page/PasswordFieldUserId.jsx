import { useId } from "react";
const PasswordFieldUserId = () => {
    const UserPasswordField = useId()
    return (
        <>
            <input type="text" aria-describedby="UserPasswordField" />
            <p id={UserPasswordField}>
                The password should contain at least 18 characters
            </p>
        </>
    )
}
const PasswordFieldUser=()=>{
    return(
        <>
            <h1>password</h1>
            <PasswordFieldUserId/>
            <h1>confirm password</h1>
            <PasswordFieldUserId/>
        </>
    )
}
export default PasswordFieldUser;