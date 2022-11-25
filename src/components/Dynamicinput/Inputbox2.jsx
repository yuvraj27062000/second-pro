
import { React, useState } from "react";
import "./space.css"




export const Inputbox2 = () => {
    const [data1, setData1] = useState({
        id: "1",
        Empname: "",
        Empdept: ""
    })
    const [data2, setData2] = useState({
        id: "2",
        Empname: "",
        Empdept: ""
    })

    const getData1 = (e) => {
        data1[e.target.name] = e.target.value
        setData1(data1)
        // console.log("e");

    }
    const getData2 = (e) => {
        data2[e.target.name] = e.target.value
        setData2(data2)
        // console.log("e");

    }

    const addData = (e) => {
        e.preventDefault()
        console.log(data1);
        console.log(data2);
    }
    return (
        <>
            <form onSubmit={addData}>
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData1} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData1} required />
                </div>
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData2} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData2} required />
                </div>
                <div className='outer' >
                    <button value="submit" type="submit">Add Data </button>
                </div>
            </form>

        </>
    )
}