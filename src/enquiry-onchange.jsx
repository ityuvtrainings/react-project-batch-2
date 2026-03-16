import { useState } from "react";

const EnquiryOnChange = () => {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const HandlerSubmit = (event) => {
        event.preventDefault();
        console.log(form)
        
    }
    const OnChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === 'age' && (parseInt(value) < 18 || parseInt(value) > 30)) {
            setError(
                (pv) => ({
                    ...pv,
                    [name]: 'Age is not valid age must be 18 to 30', // Updates only the field matching the 'name' variable
                })
            )
        }
        else{
             setError(
                (pv) => ({
                    ...pv,
                    [name]: '', // Updates only the field matching the 'name' variable
                })
            )
        }
        console.log(error)
        setForm((pv) => ({
            ...pv,
            [name]: value, // Updates only the field matching the 'name' variable
        }));
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: 'column', width: '30%' }}>
                <h1>OnChange Event form</h1>
                <form onSubmit={HandlerSubmit}>
                    <input type="text" placeholder="Enter full name" onChange={OnChangeHandler} name="name" />
                    <span style={{color:'red'}}>{error?.name}</span>
                    <input type="number" placeholder="Enter Age" onChange={OnChangeHandler} name="age" />
                    <span style={{color:'red'}}>{error?.age}</span>
                    <input type="text" placeholder="Enter City" onChange={OnChangeHandler} name="city" />
                    <span style={{color:'red'}}>{error?.name}</span>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
export default EnquiryOnChange;