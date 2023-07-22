import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux'; 
import { ServerURL } from '../../Services/NodeServices';

export default function PopCart(props) {
    console.log(props)
  const [anchorE2, setAnchorE2] = React.useState(props.anchorE2);
  const [openn, setOpenn] = React.useState(props.openn);
  
  var cart=useSelector(state=>state.cart)
  var values=Object.values(cart)
  
  const totalPayableAmount=(a,b)=>{
    
    var price=0
    if(b.offerprice>0)
    price=b.offerprice*b.qty
    else
    price=b.price*b.qty
    return a+price
  }

  const actualAmount=(a,b)=>{
    return a+b.price*b.qty
  }


  var tpay=values.reduce(totalPayableAmount,0)
  var aamt=values.reduce(actualAmount,0)
  var keys=Object.keys(cart)
  
  const showCart=()=>{

    return values.map((item)=>{
     return(
  <div  style={{ padding:5,display:'flex',width:350,justifyContent:'space-evenly'}}>
                <div style={{width:60,height:60}}>
                <img src={`${ServerURL}/images/${item.picture}`} style={{width:60,height:60}}/>
                </div>
                <div  style={{ padding:2,display:'flex',flexDirection:'column',marginLeft:10}}>
                 <div style={{color:'#000',fontWeight:600,letterSpacing:1,fontSize:12}}>
                  {item.productname}
  
                 </div>
                 <div style={{marginTop:3,fontWeight:600,letterSpacing:1,fontSize:12}}>
                   {item.offerprice>0?<><div style={{display:'flex',flexDirection:'column'}}><div style={{display:'flex',flexDirection:'row'}}><span style={{color:'#000'}}>&#8377;{item.offerprice}</span><span style={{marginLeft:7,textDecoration:'line-through',color:'red'}}>&#8377;{item.price}</span></div></div><div><span style={{color:'green'}}>Save &#8377;{item.price-item.offerprice}</span></div></>:<><span>&#8377;{item.price}</span><span>Fixed Price</span></>}
                 </div>
                 </div>
                 
                 <div style={{fontWeight:600,letterSpacing:1,fontSize:12}}>X {item.qty}</div>
                  <span style={{fontWeight:600,letterSpacing:1,fontSize:12}}>
                   {item.offerprice>0?<>&#8377;{item.offerprice*item.qty}</>:<>&#8377;{item.price*item.qty}</>}
  
                  </span>
                  </div> 
                
         
  
     )
  
  
    })
  }
    
  const showPaymentDetails=()=>{
     return(
    <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
    <div  style={{padding:'5px 0px 5px 0px',display:'flex',width:300,justifyContent:'space-between'}}> 
  <div style={{fontWeight:600,letterSpacing:1,fontSize:12}}>Total Amount:</div>
                  <span style={{fontWeight:600,letterSpacing:1,fontSize:12}}>
                  &#8377;{aamt}
                  </span>
   </div>
  
   <div  style={{padding:'5px 0px 5px 0px',display:'flex',width:300,justifyContent:'space-between'}}> 
  <div style={{fontWeight:600,letterSpacing:1,fontSize:12,color:'green'}}>You save:</div>
                  <span style={{fontWeight:600,letterSpacing:1,fontSize:12,color:'green'}}>
                  -&#8377;{aamt-tpay}
                  </span>
   </div>
  
  <div  style={{padding:'5px 0px 5px 0px',display:'flex',width:300,justifyContent:'space-between'}}> 
  <div style={{fontWeight:600,letterSpacing:1,fontSize:12}}>Shipping:</div>
                  <span style={{fontWeight:600,letterSpacing:1,fontSize:12,color:'green'}}>
                  Free
                  </span>
   </div>
  <div style={{width:350}}>
  <Divider style={{color:'#000'}}/>
  </div>
  <div  style={{padding:'5px 0px 5px 0px',display:'flex',width:300,justifyContent:'space-between'}}> 
  <div style={{fontWeight:600,letterSpacing:1,fontSize:12}}>Amount Payable:</div>
                  <span style={{fontWeight:600,letterSpacing:1,fontSize:12}}>
                  &#8377;{tpay}
                  </span>
   </div>
  
   </div>)
  
  }
  
  
  
  React.useEffect(function(){
     setOpenn(props.openn)
     setAnchorE2(props.anchorE2)

  },[props])
  
  const handlePopoverClose = () => {
    setAnchorE2(null);
  };

  

  return (
    <div>
      
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
         
        }}
        open={openn}
        anchorEl={anchorE2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
       {showCart()}
      <Divider/>
      {showPaymentDetails()}
      </Popover>
    </div>
  );
}