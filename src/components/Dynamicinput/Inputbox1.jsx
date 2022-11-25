
import { React, useState } from "react";

import "./space.css"


export const Inputbox1 = () => {
    
    const [data, setData] = useState({
        id: "1",
        Empname: "",
        Empdept: ""
    })

    const getData = (e) => {

        data[e.target.name] = e.target.value
        setData(data)
        // console.log("e");

    }

    const addData = (e) => {
        e.preventDefault()
        console.log(data);

        // setData(data)
    }
    return (
        <>
            <form onSubmit={addData} >
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} required />
                </div>
                <div className='outer' >
                    <button value="submit" type="submit">Add Data </button>
                </div>
            </form>
        </>
    )
}

