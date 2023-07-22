import React,{useEffect,useState} from "react"

export default function Heading(props){
    return (<div style={{ width: '100wh', textAlign: 'center', fontSize: 30,fontFamily:'Montserrat',fontWeight:'bolder', letterSpacing: 3,  margin: 5, color: props.color,textShadow: '1px 2px 3px' }}>
      {props.heading}

    </div>)
}

