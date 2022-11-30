import React, { useState } from 'react';

import { DynamicData } from "./DynamicData"

import "./space.css"


export function AddInputs() {
    const [change, setChange] = useState("off");
    const [data, setData] = useState(0);

    const EmpNumber = [1, 2, 3, 4, 5,8,10];


    const check = (e) => {
        if (e.target.value === "off") {
            setChange("on")

        }
        else {
            setChange("off");

        }

    }

    const emphandler = (e) => {

        let empnumber = e.target.value
        setData(empnumber)
        console.log(empnumber);
    }

    return (
        <div>

            <select onChange={emphandler} name="Employee" id="emp">
                <option selected disabled>Add Number of Employees </option>
                {EmpNumber.map((val) => (<option onChange={emphandler} value={val}>{val}</option>))}
            </select>
            <label htmlFor="checkbox">add the Employee</label>
            <input type="checkbox" id='checkbox' value={change} placeholder='Number of Emp' onChange={check} /><br /><br /><br /><br />
           
           
            { change  == "on" &&  <DynamicData  loop={data} /> }


            {/* {change  == "on" && <MultipleInput  data = {data} />} */}
            {/* {(change === "on" && data === "1") && <Inputbox1 />}
            {(change === "on" && data === "2") && <Inputbox2 />}
            {(change === "on" && data === "3") && <Inputbox3 />}
            {(change === "on" && data === "4") && <Inputbox4 />}
            {(change === "on" && data === "5") && <Inputbox5 />} */}

        </div>
    )
}