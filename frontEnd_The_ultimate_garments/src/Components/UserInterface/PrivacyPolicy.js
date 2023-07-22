import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import PrivacyPolicyComponemt from "./UserComponents/PrivacyPolicyComponemt";
import HomeFooter from "./UserComponents/HomeFooter";


export default function PrivacyPolicy(props){
    return(
        <div>
  <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
   {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
  </div>

   <SearchBar />

    <MainBar />
    <div style={{padding:15}}>
  <PrivacyPolicyComponemt/>
    </div>
    <div>
  <HomeFooter/>
    </div>

        </div>

        
    )
}