import React,{useEffect,useState} from "react"
import { ServerURL } from "../../Services/NodeServices"
export default function ThreeCardComponent(props){


       return props.data.map((item)=>{

        return(
              <div style={{padding:2,margin:3,position:'relative', width:405,height:500,cursor: 'pointer'}}>
              <img title={item.subcategoryname} src={`${ServerURL}/images/${item.picture}`} style={{width:'100%',height:'100%'}}/>
              <div style={{fontSize:20,fontWeight:'bold',position:'absolute',top:'92%',textAlign:'center',color:'#FFF',zIndex:1,width:405}}>{item.productname}</div>
              </div>      
      
        )})
      
     
}