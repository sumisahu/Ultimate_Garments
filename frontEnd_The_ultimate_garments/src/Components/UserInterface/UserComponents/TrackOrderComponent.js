import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ServerURL } from "../../Services/NodeServices";



export default function TrackOrderComponent(props){
    const [showTrackId, setShowTrackId]= useState(true) 
    const [showOrderId, setShowOrderId]= useState(false) 

    const handleTrackId=()=>{
        setShowTrackId(true)
        setShowOrderId(false)
    }
    const handleOrderId=()=>{
        setShowOrderId(true)
        setShowTrackId(false)
    }


    return(<div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50,}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#51cbcc',fontSize:30,padding:8}}>
        Track your Order or Shipment    
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:12,fontWeight:700,background:'#f1f1f1',}}>
        <marquee direction="Right">Enter your Tracking ID or Order ID to track the status of your order.
         You can find the Tracking ID and Order ID in the Email/SMS confirming that your order has been shipped.</marquee>
        </div>
        <div style={{background:'#f1f1f1'}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,marginTop:20}}>
                <div>
            <span style={{fontSize:25}}> Tracking ID</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span onClick={handleTrackId} style={{background:'#51cbcbcc',paddingLeft:10,paddingRight:10,borderRadius:3,cursor:'pointer',fontWeight:600,fontSize:15,border: showTrackId ? '2px solid #000' : ''}}>Click</span>
             </div>
             </div>
            </Grid>
            <Grid item xs={12}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,marginTop:10}}>
                <div>
            <span style={{fontSize:25}}> Order ID</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span onClick={handleOrderId} style={{background:'#51cbcbcc',paddingLeft:10,paddingRight:10,borderRadius:3,cursor:'pointer',fontWeight:600,fontSize:15,border: showOrderId ? '2px solid #000' : ''}}>Click</span>
             </div>
             </div>
             {showTrackId?
             <Grid item xs={12}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:20,fontSize:18}}>
            Enter Details
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:2,fontSize:18}}>
            <TextField color="secondary" margin="normal" placeholder="Enter Tracking #ID" disableUnderline={false} InputLabelProps="disableAnimation" size="small" />
            <div style={{width:90,background:'#51cbcc',textAlign:'center',padding:5,borderRadius:3,fontSize:14,fontWeight:500,marginLeft:20,marginTop:5}}>
                Submit
            </div>
            </div>
             </Grid>:null}
             {showOrderId?
             <Grid item xs={12}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:20,fontSize:18}}>
            Enter Details
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:2,fontSize:18}}>
            <TextField color="secondary" margin="normal" placeholder="Enter Order #ID" disableUnderline={false} InputLabelProps="disableAnimation" size="small" />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:2,fontSize:18}}>
            <TextField color="secondary" margin="normal" placeholder="Email" disableUnderline={false} InputLabelProps="disableAnimation" size="small" />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:2,fontSize:18,marginBottom:20}}>
            <div style={{width:90,background:'#51cbcc',textAlign:'center',padding:5,borderRadius:3,fontSize:14,fontWeight:500,marginLeft:20,marginTop:5}}>
                Submit
            </div>
            </div>
             </Grid>:null}
            </Grid>

        </Grid>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:2,fontSize:20,}}>
        <img src={`${ServerURL}/images/love.png`} style={{width:30}} />
        Thank you for shopping at The Ultimate Garments, keep loving!
        <img src={`${ServerURL}/images/love.png`} style={{width:30}} />
        </div>
        </div>
        
    )
}