import React, { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function AboutUsComponent(props){
    return(
        <div>
            <div style={{background:'#fff',marginTop:20}}>
        <a href='http://localhost:3000/home' style={{textDecoration:'none',color:'#000'}} ><HomeIcon fontSize="medium"/> </a> <ArrowForwardIosIcon fontSize="small"/> <span style={{textAlign:'center',position:'relative',bottom:4,fontSize:13,fontWeight:500}}> About Us</span>
        </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontSize:30,fontWeight:600,letterSpacing:1,fontFamily:'sans-serif',marginTop:20 }}>
                    The Ultimate Garments
         </div> 

         <div style={{marginTop:20,fontSize:25,fontWeight:600,padding:5}}>
         About Us
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Looking for the best online shopping experience? You’re in the right place! At TUG, we strive hard to bring you the latest
          trends and unmatched quality at unbeatable prices. We are a one-stop online shopping fashion destination where you can shop for
           men, women and kids.
         </div>

         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Whether you are a busy professional or have a hectic college schedule, TUG brings you the convenience of shopping for your
          favourite styles right from the comfort of your home. If you are on the lookout for the best deals, you will realise that
           TUG is one of the best online shopping sites in India.
         </div>

         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Most online shopping sites offer end of season sales, but we are dedicated to bring to you the most affordable yet stylish
          fashion all year round. Whether you are online shopping for men, women or kids, our collection of designer wear at unbeatable 
          discounts is sure to impress you. Unlike other online shopping sites, you will always find our collections at huge discounts 365 
          days of the year.
         </div>

         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         With in-house capabilities in design, manufacturing, technology, data science and marketing Vastrado aims to provide
          distinctive fashion at the most affordable price in the market, bringing accessibility and value to everyday fashion.
         </div>

         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Now get more value for your money when online shopping for women, men and kids – only at TUG !
         </div>

         <div style={{marginTop:3,fontSize:20,fontWeight:600,padding:5,}}>
         Dreamt in India, Made in India.
         </div>



        </div>
    )
}