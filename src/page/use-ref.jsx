import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
    const [input, setInput] = useState("")
    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    })
    return (
        <>
            <h1>Use UseRef on Input</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <p>Count useref: {count.current}</p>
        </>
    )
}
export default HookUseRef