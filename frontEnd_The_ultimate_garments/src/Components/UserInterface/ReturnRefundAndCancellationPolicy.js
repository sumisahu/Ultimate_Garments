import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import ReturnRefundAndCancellationPolicyComponent from "./UserComponents/ReturnRefundAndCancellationPolicyComponent";
import HomeFooter from "./UserComponents/HomeFooter";


export default function ReturnRefundAndCancellationPolicy(props){
    return(
        <div>
  <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
   {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
  </div>

   <SearchBar />

    <MainBar />
    <div style={{padding:15}}>
  <ReturnRefundAndCancellationPolicyComponent/>
    </div>
    <div>
  <HomeFooter/>
    </div>

        </div>

        
    )
}