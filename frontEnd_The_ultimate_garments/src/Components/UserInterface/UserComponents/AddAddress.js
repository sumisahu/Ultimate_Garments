import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { postData } from "../../Services/NodeServices";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function AddAddress(props) {
  const [mobileNumber, setMobileNumber] = useState(props.userData.mobilenumber);
  const [emailid, setEmailid] = useState(props.userData.emailid);
  const [firstname, setFirstname] = useState(props.userData.firstname);
  const [lastname, setLastname] = useState(props.userData.lastname);
  const [dateofbirth, setDateofbirth] = useState(props.userData.dateofbirth);
  const [gender, setGender] = useState(props.userData.gender);
  const [pincode, setPincode] = useState('');
  const [town, setTown] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [userid, setuserID] = useState(props.userData.userid);
  const [userAddress,setUserAddress]=useState({})
  const fetchUserAddress=async()=>{
    var result=await postData("userinterface/check_user_address",{userid})
    if(result.status)
    {
      setUserAddress(result)
    }

  }
  useEffect(function(){
    fetchUserAddress()
  },[] )
  const handleClick=async()=>{
    if(town && pincode && city && state && address)
   { 
   var result=await postData('userinterface/submit_useraddress',{userid,pincode,town,city,state,address})
   if (result.status)
   { alert("Address Submitted Successfully")}
   else
   {
    alert("Fail to submit ur address....")
   }
   }
   else
   {
    alert("Pls Input Complete Address.....")
   }
  }
 const showAddress=(address)=>{
 return address.map((item)=>{
 return(<div>
    <div>{props.userData.firstname} {props.userData.lastname}</div>
    <div>{item.address}</div>
    <div>{item.town} {item.pincode}</div>    
    <div>{item.city},{item.state}</div>
  </div>)
 })
 }



  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "#fff",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "2px solid #fff",
          margin: 20,
          width: "100%",
        }}
      >

        {userAddress.status?<>{showAddress(userAddress.data)}</>:
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                background: "#ddd",
                width: 127,
                padding: 7,
                borderRadius: 5,
                border: "2px solid #ABABAB",
                fontFamily: "sans-serif",
                fontSize: 16,
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              Add new Address
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                placeholder="First Name"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
                value={firstname}
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                placeholder="Last Name"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
                value={lastname}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                placeholder="Phone No."
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
                value={mobileNumber}
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                onChange={(event)=>setPincode(event.target.value)}
                placeholder="PIN Code"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                onChange={(event)=>setTown(event.target.value)}
                placeholder="Town/Village"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                onChange={(event)=>setCity(event.target.value)}
                placeholder="City/District"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                placeholder="State"
                onChange={(event)=>setState(event.target.value)}
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: "#fff" }}>
              <TextField
                color="secondary"
                margin="normal"
                fullWidth
                placeholder="Address (House No,Building,Street,Area)"
                disableUnderline={false}
                InputLabelProps="disableAnimation"
                size="small"
                onChange={(event)=>setAddress(event.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Checkbox {...label} /> Make this my Default Address
          </Grid>
        </Grid>}
      </div>
    </div>
  );
}
