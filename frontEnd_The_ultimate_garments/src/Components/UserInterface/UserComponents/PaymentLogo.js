import React, { useState, useEffect } from "react";
import { ServerURL } from "../../Services/NodeServices";


export default function PaymentLogo(props){



    return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#ecf0f1'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'90%',background:'#fff',padding:15}}>

    <img src={`${ServerURL}/images/paytm.png`} style={{width:'10%',height:'auto',}} />
    <img src={`${ServerURL}/images/upi.png`} style={{width:'10%',height:'auto',}} />
    <img src={`${ServerURL}/images/rupay.png`} style={{width:'10%',height:'auto',}} />
    <img src={`${ServerURL}/images/netbanking.png`} style={{width:'10%',height:'auto',}} />
    <img src={`${ServerURL}/images/visa.png`} style={{width:'10%',height:'auto',}} />
    </div>
    </div>
    )
}