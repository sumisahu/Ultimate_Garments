import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import { ServerURL } from "../../Services/NodeServices";

export default function QualityAssuredLogo(props){


    return(<div  style={{width:'100%',display:'flex',alignItem:'center',justifyContent:'center',background:'#ecf0f1'}}> 
    
     <Grid style={{display:'flex',alignItem:'center',justifyContent:'center',background:'#fff',width:'70%',boxShadow:'rgb(0 0 0 / 20%) 0px 1px 5px 0px'}} container >
        <div style={{padding:25,}}>  
        <Grid item xs={3}>
            <div style={{width:200,height:150,padding:25,textAlign:'center',borderRadius:'5px',border:'1px solid #a7a7a7'}}>
            <img src={`${ServerURL}/images/home-grown-icons.jpg`} style={{width:'35%',height:'auto',marginTop:17}} /><br/><div style={{fontSize:17,padding: '10px 0 15px',fontWeight:700}}>Home Grown Brand</div>
            </div>
        </Grid>
        </div>
        <div style={{padding:25,}}>
        <Grid item xs={3}>
            <div style={{width:200,height:150,padding:25,textAlign:'center',borderRadius:'5px',border:'1px solid #a7a7a7'}}>
            <img src={`${ServerURL}/images/quality-icons.jpg`} style={{width:'35%',height:'auto',marginTop:17}} /><br/><div style={{fontSize:17,padding: '10px 0 15px',fontWeight:700}}>100% Quality Assured</div>
            </div>
        </Grid>
        </div>
        <div style={{padding:25,}}>
        <Grid item xs={3}>
            <div style={{width:200,height:150,padding:25,textAlign:'center',borderRadius:'5px',border:'1px solid #a7a7a7'}}>
            <img src={`${ServerURL}/images/secure-payment-icons.jpg`} style={{width:'35%',height:'auto',marginTop:17}} /><br/><div style={{fontSize:17,padding: '10px 0 15px',fontWeight:700}}>100% Secure Payments</div>
            </div>
        </Grid>
        </div>

       {/*  <div style={{padding:25,}}>
        <Grid item xs={3}>
            <div style={{width:200,height:150,padding:25,textAlign:'center',borderRadius:'5px',border:'1px solid #a7a7a7'}}>
            <img src={`${ServerURL}/images/returnpolicy.jpg`} style={{width:'35%',height:'auto',marginTop:17}} /><br/><div style={{fontSize:17,padding: '10px 0 15px',fontWeight:700}}>Easy Replacement</div>
            </div>
        </Grid>
        </div> */}

        
        </Grid>
 
    
    </div>
    )
}