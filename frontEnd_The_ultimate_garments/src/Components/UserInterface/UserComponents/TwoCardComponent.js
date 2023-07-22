import React,{useEffect,useState} from "react"
import { ServerURL } from "../../Services/NodeServices"
export default function TwoCardComponent(props){


       return props.data.map((item)=>{

        return(
              <div style={{padding:2,margin:3,position:'relative', width:610,height:350,cursor: 'pointer',textAlign:'center'}}>
              <img title={item.subcategoryname} src={`${ServerURL}/images/${item.picture}`} style={{width:'100%',height:'100%'}}/>
              <div style={{fontSize:20,fontWeight:'bold',position:'absolute',top:'93%',color:'#FFF',zIndex:1,left:'50%',transform: 'translate(-50%, -50%)',}}>{item.productname}</div>
              </div>      
      
        )})
      
     
}