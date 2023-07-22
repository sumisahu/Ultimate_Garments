import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import React, { useState, useEffect } from "react";
import ProductDetailFilling from "./UserComponents/ProductDetailFilling";
import ImageSlider from "./UserComponents/ImageSlider";
import { width } from "@mui/system";
import ProductDetails from "./UserComponents/ProductDetails";
import RatingLogo from "./UserComponents/RatingLogo";
import HomeFooter from "./UserComponents/HomeFooter";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useLocation } from "react-router";
import { Grid } from "@mui/material";

export default function SetProductDetails(){
    const [refresh,setRefresh]=useState(false)
    var location=useLocation()
    var product=location.state.product
   // console.log("PROOOOOOPS:",location)
      var productid = JSON.parse(product).productid
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const updateCart=()=>{
        setRefresh(!refresh)
         }

    return(<div style={{ Width: 'auto'}}>

    <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
       {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
       </div>
       
        <SearchBar />
    
        <MainBar />

        <div style={{width:'100%',background:'#fff',marginTop:40}}>
       <Grid container>
     { matches?<> <Grid item xs={12}>
             <ImageSlider productid={productid}/>
             </Grid></>:<>
       <Grid item xs={6}>
             <ImageSlider productid={productid}/>
             </Grid></>}

             { matches?<> <Grid item xs={12}>

             <ProductDetailFilling updateCart={updateCart} productInfo={product}/>
             </Grid></>:<>
           <Grid item xs={6}>
             <ProductDetailFilling updateCart={updateCart} productInfo={product}/>
             </Grid></>}

             </Grid>
        </div>


        <div style={{marginTop:50}}>
            <ProductDetails/>
        </div>

        <div style={{marginTop:50}}>
            <RatingLogo/>
        </div>

        <div style={{marginTop:50}}>
            <HomeFooter/>
        </div>
   
    </div>)
}