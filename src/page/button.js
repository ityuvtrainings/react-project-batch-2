import { memo } from "react";
const Button= memo(({onClick,text})=>{
    console.log('button',text)
    return <button onClick={onClick}>{text}</button>
})
export default Button;