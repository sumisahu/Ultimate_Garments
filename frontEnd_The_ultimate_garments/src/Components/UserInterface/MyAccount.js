import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import MyAccountComponent from "./UserComponents/MyAccountComponent";
import HomeFooter from "./UserComponents/HomeFooter";


export default function MyAccount(props){
    return(
        <div>
  <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
   {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
  </div>

   <SearchBar />

    <MainBar />
    <div>
  <MyAccountComponent/>
    </div>
    <div>
  <HomeFooter/>
    </div>

        </div>

        
    )
}