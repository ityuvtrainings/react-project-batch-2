import { useCallback, useState, memo } from "react";
import Button from "./button";
const CounterCallBack = () => {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)
    const incress1 = useCallback(() => setcount1(c => c + 1))
    const incress2 = useCallback(() => setcount2(c => c + 1))
    return (
        <>
            <h1>Count 1: {count1}</h1>
            <h1>Count 2: {count2}</h1>
            <Button onClick={incress1} text={`Incress ${count1}`}/> 
            <Button onClick={incress2} text={`Incress ${count2}`}/>
        </>
    )
}
export default CounterCallBack;     