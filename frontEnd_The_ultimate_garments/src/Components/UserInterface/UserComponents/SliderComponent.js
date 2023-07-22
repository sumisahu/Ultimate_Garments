import React, { createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ServerURL } from "../../Services/NodeServices";

export default function SliderComponent(props){
    var mySlider = createRef()
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));   

    const setImageInSlider = () => {
       return props.images.map((item) => {
          return (<div>
             <img src={`${ServerURL}/images/${item}`} width='100%' />
 
          </div>)
       })
    }
 
    const handleBack = () => {
       mySlider.current.slickPrev()
    }
    const handleForward = () => {
       mySlider.current.slickNext()
    }


    return(<div>
      {props.images.length>0?
<div style={{ width: '100%' }}>
          {matches?<></>: 
         <div onClick={() => handleBack()} style={{ display: 'flex', cursor: 'pointer', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', left: '2%', top: '46%', zIndex: 1, background: '#000', width: 30, height: 50, borderRadius: 2,opacity:0.3}}>
            <ArrowBackIosNewIcon style={{ color: '#fff' }} />
         </div>}
         <Slider {...props.bannersettings} ref={mySlider}>
            {setImageInSlider()}
         </Slider>
         {matches?<></>: 
         <div onClick={() => handleForward()} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', left: '96.2%', top: '46%', zIndex: 1, background: '#000', width: 30, height: 50, borderRadius: 2,opacity:0.3 }}>
            <ArrowForwardIosIcon style={{ color: '#fff' }} />
         </div>}

      </div>
      :<></>}
    </div>)
}