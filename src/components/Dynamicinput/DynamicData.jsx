import React from "react";
import { useState } from "react";

export const DynamicData = (props) => {
    const loop = props.loop
    let data = []
    for (let i = 1; i <= loop; i++) {
        data.push(i);
    }

    let dataList = []

    let mainOb = {
        // Emp_1 : {
        //     // Empname:"",
        //     // EmpDept:""
        // }
    }

    const [InputData, setInputData] = useState({})
    const [InputData1, setInputData1] = useState([])


    const getData = (e) => {
        setInputData({ ...InputData, [e.target.name]: e.target.value })
        // console.log(e.target.name);
        // console.log(e.target.id);

        // let id = e.target.id
        // let value = e.target.value
        // let name = e.target.name


        // mainOb
        // setInputData({...InputData, [`Emp_${id}`] : {[e.target.name]: e.target.value}})

        // setInputData({ [`${e.target.name}${id}`]: e.target.value })
        // dataList.push(ob)
        // setInputData(dataList)
    }

    const addData = (e) => {


        e.preventDefault()
        dataList.push(InputData)
        // setInputData(dataList)
        setInputData1(dataList)
        console.log("data,", InputData1);
    }



    return (
        <>


            <form onSubmit={addData}>

                {data.map((val) => {
                    return (
                        <div className='outer' >
                            Epmloyee Name : <input type="text"

                                placeholder="Epmloyee Name ."

                                name={`Empname${val}`}

                                onChange={getData}

                                id={`name${val}`} required />

                            Employee Department : <input type="text"

                                placeholder="Employee Department."

                                name={`Empdept${val}`}

                                // onChange={(e) =>
                                //     setInputData((prev) => {
                                //         return { ...prev, [e.target.name]: e.target.value };
                                //     })
                                // }
                                onChange={getData}


                                id={`dept${val}`} required />

                        </div>

                    )

                })}
                <div className='outer' >
                    <button value="submit" type="submit" >Add Data </button>
                </div>
            </form>

        </>
    )
}

