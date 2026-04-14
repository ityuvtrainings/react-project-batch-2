import { useEffect, useState } from "react";
import { Form } from "react-router";
const ToDo = () => {
    let [list, setlist] = useState([])
    const AddTask = (event) => {
        event.preventDefault()
        const formdata = new FormData(event.target)
        let josnobj = {}
        formdata.forEach((name, value) => {
            josnobj[value] = name
        });
        setlist(prevList => [...prevList, josnobj]);
        console.log(list)
    }
    useEffect(() => {

    })
    return (
        <>
            <form onSubmit={AddTask}>
                <input type="text" name="title" />
                <input type="text" name="details" />
                <button type="submit">Add Task</button>
            </form>
            <table border={1} style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>details</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((value, index) => (
                        <tr key={index}>
                            <td>{value.title}</td>
                            <td>{value.details}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ToDo;