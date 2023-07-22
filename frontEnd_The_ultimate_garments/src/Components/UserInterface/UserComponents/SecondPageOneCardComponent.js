import React,{useEffect,useState} from "react"
import { ServerURL } from "../../Services/NodeServices"
import { useNavigate } from "react-router"
export default function SecondPageOneCardComponent(props){
     
       return props.data.map((item)=>{

        return(
              <div style={{position:'relative', width:'100%',height:'auto',cursor: 'pointer'}}>
              <img title={item.subcategoryname} src={`${ServerURL}/images/${item.icon}`} style={{width:'100%',height:'100%'}}/>
              </div>      
      
        )})
      
     
}