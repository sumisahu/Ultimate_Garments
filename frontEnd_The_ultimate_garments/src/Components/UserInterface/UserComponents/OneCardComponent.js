import React,{useEffect,useState} from "react"
import { ServerURL } from "../../Services/NodeServices"
import { useNavigate } from "react-router"
export default function OneCardComponent(props){
      var navigate=useNavigate()  
      const handleClick=(scid)=>{
        navigate(`/${props.url}/${scid}`)
  
      }

       return props.data.map((item)=>{

        return(
              <div onClick={()=>handleClick(item.subcategoryid)} style={{position:'relative', width:1235,height:'auto',cursor: 'pointer',marginBottom:25}}>
              <img title={item.subcategoryname} src={`${ServerURL}/images/${item.icon}`} style={{width:'100%',height:'100%'}}/>
              {/* <div style={{fontSize:20,fontWeight:'bold',position:'absolute',top:'93%',left:'50%',transform: 'translate(-50%, -50%)',color:'#FFF',zIndex:1}}>{item.productname}</div> */}
              </div>      
      
        )})
      
     
}