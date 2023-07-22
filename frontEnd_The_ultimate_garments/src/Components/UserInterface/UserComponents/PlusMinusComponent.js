import { useEffect,useState } from "react";
import { AlternateEmail, ShoppingCart } from '@mui/icons-material';
import { Button,Avatar } from "@mui/material";
export default function PlusMinusComponent(props)
{  const [value,setValue]=useState(props.value)
   //alert(props.value)

  useEffect(function(){
    setValue(props.value)
  },[props.value])
   const handleClick=()=>{
      if(props.value!=null)
      {
      var v=value+1
        setValue(v)}
        
       props.onChange(v)
        
      }
      const handlePlus=()=>{
        var v=value
        if(v<5)
        {v++
        setValue(v)}
        props.onChange(v)
      }

      const handleMinus=()=>{
        var v=value
        if(v>=1)
        {v--
        setValue(v)}
        props.onChange(v)
        
      }

    return(<div>
        {value==0 || value==null?<Button onClick={handleClick} fullWidth variant="contained" style={{background:'#51cbcc'}} startIcon={<ShoppingCart />}>Add to cart</Button>:<div style={{display:'flex',width:130, alignItems:'center', justifyContent:'space-between'}}> <Avatar style={{ background:'#51cbcc',fontSize:20,fontWeight:'bold'}} variant="circular" onClick={handleMinus}>
        -
      </Avatar> <span style={{fontSize:20,fontWeight:'bold'}}>{value}</span> <Avatar style={{ background: '#51cbcc',fontSize:20,fontWeight:'bold' }} variant="circular"  onClick={handlePlus}>
        +
      </Avatar></div>}
    </div>)
}