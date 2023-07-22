import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import HomeFooter from "./UserComponents/HomeFooter";
import ShippingPolicyComponent from "./UserComponents/ShippingPolicyComponent";


export default function ShippingPolicy(props){
    return(
        <div>
         <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
    FREE SHIPPING ON ORDERS OVER 990₹ 
   </div>   
   <SearchBar/>
   <MainBar/>
   <div style={{marginBottom:50,padding:15}}>
    <ShippingPolicyComponent/>
   </div>
   <div>
    <HomeFooter/>
   </div>
        </div>
    )
}