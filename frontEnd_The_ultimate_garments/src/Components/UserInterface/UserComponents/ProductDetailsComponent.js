import React,{useEffect,useState} from "react"
import { ServerURL } from "../../Services/NodeServices"
import { useNavigate } from "react-router"
import { motion } from "framer-motion";

export default function ProductDetailComponent(props){
  var navigate=useNavigate()
  const handleProductDetails=(item)=>{
     navigate('/setproductdetails',{state:{product:JSON.stringify(item)}})

  }

       return props.data.map((item)=>{
         
        return(
          <div style={{ padding:4,margin:3}}>
          <motion.h1
          whileHover={{ scale: 1.04 , zIndex: 1,/*  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', */position:'relative',}}
          whileTap={{ scale: 0.8 }}
    >
      
        <div  onClick={()=>handleProductDetails(item)}  style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',cursor:'pointer',display:'flex',flexDirection:'column'/* ,border:'1px solid #000' */}}>
              <div style={{position:'relative', width:290,height:340}}>
              <img src={`${ServerURL}/images/${item.picture}`} style={{width:'100%',height:'100%'}}/>
              <div style={{fontSize:20,fontWeight:'bold',position:'absolute',top:'90%',color:'#FFF',zIndex:1,width:270,textAlign:'center'}}>{item.description}</div>
              </div>
              <div style={{borderLeft:'1px solid #ddd',borderRight:'1px solid #ddd',width:288}}>
               <div style={{marginTop:5,color:'#000',fontWeight:700,letterSpacing:1,fontSize:16,textAlign:'center'}}>
                {item.productname}
               </div>
               <div style={{marginTop:3,fontWeight:600,letterSpacing:1,fontSize:14,textAlign:'center',marginBottom:3,}}>
                 {item.offerprice>0?<><span style={{color:'#000',fontWeight:750,fontSize:16,fontFamily:'sans-serif'}}>&#8377;{item.offerprice}</span><span style={{marginLeft:7,textDecoration:'line-through',color:'#a7a7a7',fontWeight:490,fontSize:13.5}}>&#8377;{item.price}</span><span style={{marginLeft:7,color:'#4bb550',fontFamily:'sans-serif'}}>Save &#8377;{item.price-item.offerprice}</span></>:<><span>&#8377; {item.price}</span><span>Fixed Price</span></>}
               </div>
               </div>
               <div style={{marginTop:0,background:'#000',color:'#fff', justifyContent:'center',alignItems:'center', textAlign: 'center', width: 290, fontWeight: 600,letterSpacing:2,fontSize:20,marginBottom:0,fontFamily:'sans-serif'}}>
                 BUY NOW
               </div>
               
              </div>
              </motion.h1>
              </div>
        )
      }
      )
      

}