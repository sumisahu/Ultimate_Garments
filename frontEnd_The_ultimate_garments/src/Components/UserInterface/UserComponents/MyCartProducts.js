import { ServerURL } from "../../Services/NodeServices"
import { useStyles } from "./MyCartProductsCss"
import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import PlusMinusComponent from './PlusMinusComponent'
import { useDispatch } from "react-redux";
import { PropaneSharp } from "@mui/icons-material";

export default function MyCartProducts(props){

  var dispatch=useDispatch()

var classes = useStyles()
 
const [refresh,setRefresh]=useState(false)
const handleQtyChange=(value,product)=>{
  //alert(value)
   if(value==0)
   {
     dispatch({type:'DELETE_CART',payload:[product.productid,product]})
     
    }
   else
   {  
   product['qty']=value
   dispatch({type:'ADD_CART',payload:[product.productid,product]})
   }
  
    setRefresh(!refresh)
   props.updateCart()
 }
 
//alert(props.value.length)
return (
  <div>
  {props.value.length==0?<div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',padding:15,fontWeight:700,fontSize:16}}> <img src={`${ServerURL}/images/empty.gif`} style={{width:'60%',height:'auto',}} /></div>:props.value.map((item)=>{

    return(<div style={{display:'flex',flexWrap:'wrap',background:'#fff',padding:20}}>

   <Grid style={{border:'2px solid #ABABAB',marginTop:4}} container spacing={2}>
<Grid item xs={4}>
<div>
     <img src={`${ServerURL}/images/${item.picture}`} style={{width:130}} />
   </div>
     </Grid>
    <Grid item xs={8}>   
    <div style={{lineHeight:2,paddingLeft:10}}> 
        <div style={{fontSize:14,fontFamily:'sans-serif',fontWeight:400,}}>{item.productname}</div>
       <div style={{display:'flex',flexDirection:'row'}}> <div style={{fontSize:16,fontFamily:'sans-serif',fontWeight:600,textDecoration:'line-through',color:'red'}}>&#8377;{item.price}</div><div style={{ fontSize:16,fontFamily:'sans-serif',fontWeight:600,color:'black'}}>&nbsp;&nbsp;&nbsp;&#8377;{item.offerprice}</div></div>
       <div style={{ fontSize:16,fontFamily:'sans-serif',fontWeight:600,color:'green'}}>Saving - &#8377;{item.price-item.offerprice}</div>
        <span style={{fontSize:14,fontFamily:'sans-serif',fontWeight:600,color:'#746e6e'}}>SIZE:</span>
        <span style={{fontSize:14,fontFamily:'sans-serif',fontWeight:400,}}>&nbsp;&nbsp;{item.size}</span>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{fontSize:14,fontFamily:'sans-serif',fontWeight:600,color:'#746e6e'}}>Qty:</span>
        <span style={{fontSize:14,fontFamily:'sans-serif',fontWeight:400,}}>&nbsp;&nbsp;{item.qty}</span>
    
        <div style={{display:'flex' ,flexDirection:'column'}}>
          <div>
            <PlusMinusComponent value={item.qty} onChange={(value)=>handleQtyChange(value,item)}/>
          </div>
         <div style={{fontSize:14,cursor:'pointer',color:'#ABABAB'}}>
            REMOVE ITEM
         </div>
       </div>  
        </div>
    </Grid>
       

    </Grid>

    </div>)
    })}
 </div>   
    )
}