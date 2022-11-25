
import { React, useState } from "react";

import "./space.css"



export const Inputbox3 = () => {
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
    const [data3, setData3] = useState({
        id: "3",
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
    const getData3 = (e) => {
        data3[e.target.name] = e.target.value
        setData3(data3)
        // console.log("e");

    }

    const addData = (e) => {
        e.preventDefault()
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
    return (
        <>
            <form onsubmit={addData}>
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData1} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData1} required />
                </div>
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData2} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData2} required />
                </div>
                <div className='outer'>
                    Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData3} required />
                    Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData3} required />
                </div>
                <div className='outer' >
                    <button value="submit" type="submit" >Add Data </button>
                </div>
            </form>
        </>
    )
}