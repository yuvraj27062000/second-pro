import { React, useState } from "react";




import "./CurrentAddress.css"

export const CurrentAddress = () => {
    // const mydata =  {
    //     HouseNo: "",
    //     Streat: "",
    //     City: "",
    //     PinCode: "",
    //     Cuntry: ""
    // }
    const[show,setShow] = useState(false);

    const [user, setUser] = useState({
        HouseNo: "",
        Streat: "",
        City: "",
        PinCode: "",
        Cuntry: ""
    });
    const [data, setData] = useState({
        HouseNo: "",
        Streat: "",
        City: "",
        PinCode: "",
        Cuntry: ""
    });
    // 
    // console.log(user);
    const getData = (e) => {
        // console.log(e.target.value);
        user[e.target.id] = e.target.value
        // console.log(user);
        setUser(user)
        // console.log(user);
        // setUser({...user, [e.target.id] : e.targer.value})  
    }
   
    const box = (e) => {
        e.preventDefault()
        let check = e.target.value
       
        if(check === "yes"){
            setData({...user})
        }
        else{
            let use = {
            HouseNo: "",
            Streat: "",
            City: "",
            PinCode: "",
            Cuntry: ""
            }
            setData({...use})
        }
        // setData({...user})
        // console.log("data:",data);
    }
    const showdata = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    // const box = (e)=>{
    //     console.log(e.target.value);
    // }

    return (
        <div className=" ">
            <div>
                <h3>Current Address</h3>
                <form   >
                    <input type="text" placeholder="House No."  id="HouseNo" onChange={getData} /><br /><br />
                    <input type="text" placeholder="Streat."  id="Streat" onChange={getData} /><br /><br />
                    <input type="text" placeholder="city"  id="City" onChange={getData} /><br /><br />
                    <input type="text" placeholder="pin Code No."  id="PinCode" onChange={getData} /><br /><br />
                    <input type="text" placeholder="Cuntry" id="Cuntry" onChange={getData} /><br /><br />
                </form>
            </div>



            <div>
                <p>If you wont To copy the Current Address Press YES Else NO</p>
                <label htmlFor="yes">YES</label>
                <input type="radio" onChange={box} value="yes" name="same" id="yes" />
                <label htmlFor="no">NO</label>
                <input type="radio" onChange={box} value = "no" name="same" id="no" />
                
                <h3>Permanent Address</h3>
                <form>
                    <input type="text" placeholder="House No." name="HouseNo" onChange={showdata}  value={data.HouseNo} /><br /><br />
                    <input type="text" placeholder="Streat." name="Streat"  onChange={showdata} value={data.Streat} /><br /><br />
                    <input type="text" placeholder="city" name="City"  onChange={showdata}  value={data.City}/><br /><br />
                    <input type="text" placeholder="pin Code No." name="PinCode"  onChange={showdata} value={data.PinCode}/><br /><br />
                    <input type="text" placeholder="Cuntry"  name="Cuntry"  onChange={showdata} value={data.Cuntry}/><br />
                </form>
            </div>
        </div>
    )
} 