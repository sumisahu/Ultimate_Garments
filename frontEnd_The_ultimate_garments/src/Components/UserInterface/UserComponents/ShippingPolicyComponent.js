import React, { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ShippingPolicyComponent(props){
    return(
        <div>
          <div style={{background:'#fff',marginTop:20}}>
        <a href='http://localhost:3000/home' style={{textDecoration:'none',color:'#000'}} ><HomeIcon fontSize="medium"/> </a> <ArrowForwardIosIcon fontSize="small"/> <span style={{textAlign:'center',position:'relative',bottom:4,fontSize:13,fontWeight:500}}> Shipping Policy</span>
        </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontSize:30,fontWeight:600,letterSpacing:1,fontFamily:'sans-serif',marginTop:20 }}>
                    The Ultimate Garments
         </div>  
         <div style={{marginTop:20,fontSize:25,fontWeight:600,padding:5}}>
         Shipping Policy
         </div> 
         <div style={{marginTop:8,fontSize:14,fontWeight:500,padding:5,}}>
         We promise our patrons one of the best experiences of online shopping that is hassle free and reliable. We take care of all
          parameters that ensure your delivery reaches you in a sound state.
         </div>

         <div style={{marginTop:8,fontSize:14,fontWeight:500,padding:5,}}>
         Once the order is shipped from the warehouse, it cannot be canceled. When the shipment is delivered and if the customer receives 
         a faulty product then he or she can raise the return request.
         </div>

         <div style={{marginTop:8,fontSize:14,fontWeight:500,padding:5,}}>
         The tentative delivery period varies from 4-5 days. However, the actual delivery time may vary due to unexpected circumstances.
         </div>

         <div style={{marginTop:8,fontSize:14,fontWeight:500,padding:5,}}>
         We provide free shipping on all prepaid orders. If you choose COD payment method, we levy a Rs. 50 COD charge for every product
          you order. For example, if your order includes three products, you will be levied a COD charge of Rs.150
         </div>

        </div>
    )
}