import React, { component, useState } from 'react';
// import {MultipleInput} from "./Inputbox"

import "./space.css"
import { Inputbox1 } from "./Inputbox1"
import { Inputbox2 } from "./Inputbox2"
import { Inputbox3 } from "./Inputbox3"
import { Inputbox4 } from "./Inputbox4"
import { Inputbox5 } from "./Inputbox5"

export function AddInputs() {
    const [change, setChange] = useState("off");
    const [data, setData] = useState(0);



    const check = (e) => {
        if (e.target.value === "off") {
            setChange("on")
            // console.log(inputData);
        }
        else {
            setChange("off");

        }
        // console.log(change)
    }

    const emphandler = (e) => {
        // console.log(e.target.value) 
        let empnumber = e.target.value
        setData(empnumber)
        // renderList()
        // setInputData([...listdata1])

    }
    // const renderList = () => {
    //     let listdata = []
    //     for (let i = 0; i < data.length; i++) {
    //         listdata.push(<div><input  type="text" placeholder="Employee Name" /><input  type="text" placeholder="Employee Department" /></div>)
    //     }
    //     console.log(listdata);
    //     setInputData([...listdata])
    // }


    // console.log(data);

    return (
        <div>

            <select onChange={emphandler} name="Employee" id="emp">
                <option selected disabled>Add Number of Employees </option>
                <option onChange={emphandler} value="1"  >1</option>
                <option onChange={emphandler} value="2"  >2</option>
                <option onChange={emphandler} value="3"  >3</option>
                <option onChange={emphandler} value="4"  >4</option>
                <option onChange={emphandler} value="5"  >5</option>
            </select>
            <label htmlFor="checkbox">add the Employee</label>
            <input type="checkbox" id='checkbox' value={change} placeholder='Number of Emp' onChange={check} /><br /><br /><br /><br />


            {/* {change  == "on" && <MultipleInput  data = {data} />} */}
            {(change === "on" && data === "1") && <Inputbox1 />}
            {(change === "on" && data === "2") && <Inputbox2 />}
            {(change === "on" && data === "3") && <Inputbox3 />}
            {(change === "on" && data === "4") && <Inputbox4 />}
            {(change === "on" && data === "5") && <Inputbox5 />}

        </div>
    )
}