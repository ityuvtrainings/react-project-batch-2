const Enquiry = () => {
    const HandlerSubmit=(event)=>{
        event.preventDefault();
        console.log("Event target")
        console.log(event.target)
        console.log("FormData covet")
        const formdata=new FormData(event.target)
        console.log(formdata)
        console.log("Object json covet")
        const data=Object.fromEntries(formdata) 
        console.log(data)
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: 'column', width: '30%' }}>
                <form onSubmit={HandlerSubmit}>
                    <input type="text" placeholder="Enter full name" name="name" />
                    <input type="text" placeholder="Enter Age" name="age" />
                    <input type="text" placeholder="Enter City" name="city" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
export default Enquiry;