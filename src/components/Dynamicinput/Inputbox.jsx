import React, { useState } from 'react'

import "./space.css"

export function MultipleInput(props) {

    let data = props.data

    const mydata1 = {
        id: "",
        Empname: "",
        Empdept: ""

    }
    const mydata2 = {
        id: "",
        Empname: "",
        Empdept: ""

    }

    const mydata3 = {
        id: "",
        Empname: "",
        Empdept: ""

    }

    const mydata4 = {
        id: "",
        Empname: "",
        Empdept: ""

    }

    const mydata5 = {
        id: "",
        Empname: "",
        Empdept: ""

    }



    const datalist = []
    const [EmpData, setEmpData] = useState(datalist)

    const getData = (e) => {
        // console.log(e.target.value);
        let id = e.target.id
        console.log(id);
        switch (id) {
            case "1":
                mydata1[e.target.name] = e.target.value
                mydata1.id = "1"


                break;

            case "2":
                mydata2[e.target.name] = e.target.value
                mydata2.id = "2"


                break

            case "3":
                mydata3[e.target.name] = e.target.value
                mydata3.id = "3"


                break
            case "4":
                mydata4[e.target.name] = e.target.value
                mydata4.id = "4"


                break
            case "5":
                mydata5[e.target.name] = e.target.value
                mydata5.id = "5"


                break
            default:
                break;
        }
        // mydata[e.target.id] = e.target.value;
        // mydata[e.target.id] = e.target.value;
        // mydata[e.target.id] = e.target.value;

    }


    const addData = () => {
         
            switch (data) {
                case "1":
                    datalist.push(mydata1)
                    setEmpData(datalist)
                    break;
                case "2":
                    datalist.push(mydata1)
                    datalist.push(mydata2)
                    setEmpData(datalist)
                    break;
                case "3":
                    datalist.push(mydata1)
                    datalist.push(mydata2)
                    datalist.push(mydata3)
                    setEmpData(datalist)
                    break;
                case "4":
                    datalist.push(mydata1)
                    datalist.push(mydata2)
                    datalist.push(mydata3)
                    datalist.push(mydata4)
                    setEmpData(datalist)
                    break;
                case "5":
                    datalist.push(mydata1)
                    datalist.push(mydata2)
                    datalist.push(mydata3)
                    datalist.push(mydata4)
                    datalist.push(mydata5)
                    setEmpData(datalist)
                    break;


                default:
                    break;
            }
            console.log("mydata", datalist);
        console.log("data", EmpData);
    
         
        // switch (data) {
        //     case "1":
        //         datalist.push(mydata1)
        //         setEmpData(datalist)
        //         break;
        //     case "2":
        //         datalist.push(mydata1)
        //         datalist.push(mydata2)
        //         setEmpData(datalist)
        //         break;
        //     case "3":
        //         datalist.push(mydata1)
        //         datalist.push(mydata2)
        //         datalist.push(mydata3)
        //         setEmpData(datalist)
        //         break;
        //     case "4":
        //         datalist.push(mydata1)
        //         datalist.push(mydata2)
        //         datalist.push(mydata3)
        //         datalist.push(mydata4)
        //         setEmpData(datalist)
        //         break;
        //     case "5":
        //         datalist.push(mydata1)
        //         datalist.push(mydata2)
        //         datalist.push(mydata3)
        //         datalist.push(mydata4)
        //         datalist.push(mydata5)
        //         setEmpData(datalist)
        //         break;


        //     default:
        //         break;
        // }
        // datalist.push(mydata1)
        // datalist.push(mydata2)
        // datalist.push(mydata3)
        // datalist.push(mydata4)
        // datalist.push(mydata5)
        // setEmpData(datalist)
         
    }

    // console.log("new data",EmpData);
    // const [empData, setEmpData] = useState(mydata)




    // let data = props.data
    switch (data) {
        case "1":
            return (
                <>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData} id="1" />
                        Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} id="1" />
                    </div>
                    <div className='outer' >
                        <button onClick={addData}>Add Data </button>
                    </div>
                </>
            )
        case "2":
            return (
                <>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData} id="1" />
                        Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} id="1" />
                    </div>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname' onChange={getData} id="2" />
                        Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} id="2" />
                    </div>
                    <div className='outer' >
                        <button onClick={addData}>Add Data </button>
                    </div>

                </>
            )
        case "3":
            return (
                <>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname'  onChange={getData} id="1" />
                        Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} id="1" />
                    </div>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname'  onChange={getData} id="2" />
                        Employee Department : <input type="text" placeholder="Employee Department."name='Empdept' onChange={getData} id="2" />
                    </div>
                    <div className='outer'>
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." name='Empname'  onChange={getData} id="3" />
                        Employee Department : <input type="text" placeholder="Employee Department." name='Empdept' onChange={getData} id="3" />
                    </div>
                    <div className='outer' >
                        <button onClick={addData}>Add Data </button>
                    </div>
                </>
            )
        case "4":
            return (
                <>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="1" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="1" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="2" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="2" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="3" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="3" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="4" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="4" />
                    </div>
                    <div className='outer' >
                        <button onClick={addData}>Add Data </button>
                    </div>
                </>
            )
        case "5":
            return (
                <>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="1" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="1" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="2" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="2" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="3" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="3" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="4" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="4" />
                    </div>
                    <div className='outer' >
                        Epmloyee Name : <input type="text" placeholder="Epmloyee Name ." onChange={getData} id="5" />
                        Employee Department : <input type="text" placeholder="Employee Department." onChange={getData} id="5" />
                    </div>
                    <div className='outer' >
                        <button onClick={addData}>Add Data </button>
                    </div>
                </>
            )

        default:
            <><div>Enter Some valid Detail</div></>;
    }
    //   if(props.segment === 'grocery'){
    // return (
    //   <main>
    //     <h1>Grocery</h1>
    //     <h2>Vegetables</h2>
    //     <h2>Toothpaste</h2>
    //     <h2>Dry fruits</h2>
    //   </main>
    // )

    //   } else{
    //     return(
    //       <section>
    //         <h1>Basic</h1>
    //         <h3>Mobile</h3>
    //         <h3>Clothing</h3>
    //         <h3>TV & Appliances</h3>
    //         <h3>Electronics</h3>
    //       </section>
    //     )
    //   }
}