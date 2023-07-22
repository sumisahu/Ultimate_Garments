import React, { useState, useEffect } from "react";
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import SliderComponent from "./UserComponents/SliderComponent";
import SmallCardComponent from "./UserComponents/SmallCardComponent";
import TwoCardComponent from "./UserComponents/TwoCardComponent";
import ThreeCardComponent from "./UserComponents/ThreeCardComponent";
import Heading from "./UserComponents/Heading";
import { getData, ServerURL, postData } from '../Services/NodeServices';
import OneCardComponent from "./UserComponents/OneCardComponent";
import { Fade, Flip, Roll, Slide, Zoom } from 'react-reveal';
import HomeFooter from "./UserComponents/HomeFooter";


var bannersettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
};

/* var images = [{ 'id': 1, 'image': `${ServerURL}/images/63.jpg` },
{ 'id': 2, 'image': `${ServerURL}/images/57.jpg` },
{ 'id': 3, 'image': `${ServerURL}/images/58.jpg` },
{ 'id': 4, 'image': `${ServerURL}/images/59.jpg` },
{ 'id': 5, 'image': `${ServerURL}/images/60.jpg` },
{ 'id': 6, 'image': `${ServerURL}/images/61.jpg` },
{ 'id': 7, 'image': `${ServerURL}/images/62.jpg` },
] */


export default function Home() {
  const [banners, setBanners] = useState([])
  const [productsBySaleStatus, setProductBySaleStatus] = useState([])
  const [productsBySaleStatusPopular, setProductBySaleStatusPopular] = useState([])
  const [productsBySaleStatusRelevance, setProductBySaleStatusRelevance] = useState([])
  const [oneCardImagesSubcategoryByPriority, setOneCardImagesSubcategoryByPriority] = useState([])

  const fetchProducts = async (status) => {
    var body = { 'salestatus': status }
    var result = await postData('userinterface/display_all_products_salestatus', body)
    setProductBySaleStatus(result.data)

  }


  useEffect(function () {
    fetchProducts('Trending')
    fetchProductsPopular('Popular')
    fetchProductsRelevance('Relevance')
    fetchOneCardImagesSubcategoryByPriority(1)

  }, [])

  const fetchProductsPopular = async (status) => {
    var body = { 'salestatus': status }
    var result = await postData('userinterface/display_all_products_salestatus', body)
    setProductBySaleStatusPopular(result.data)

  }



  const fetchProductsRelevance = async (status) => {
    var body = { 'salestatus': status }
    var result = await postData('userinterface/display_all_products_salestatus', body)
    setProductBySaleStatusRelevance(result.data)

  }


  const fetchOneCardImagesSubcategoryByPriority = async (priority) => {
    var body = { 'priority': priority }
    var result = await postData('userinterface/display_all_subcategory_priority', body)
    setOneCardImagesSubcategoryByPriority(result.data)

  }


  const fetchBanners = async () => {
    var result = await getData('userinterface/display_all_banners')
    var temp = JSON.parse(result.data.bannerpictures)


    setBanners(temp)
  }
  useEffect(function () { fetchBanners() }, [])


  return (<div style={{ Width: 'auto'}}>
    
   <div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
   {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
   </div>
   
    <SearchBar />

    <MainBar />

    <div style={{ marginBottom: 55 }}>
      <Slide left duration={2000}>
        <SliderComponent images={banners} bannersettings={bannersettings} />
      </Slide>
    </div>

    <Heading heading="TRENDING" color="#343434" />
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 55 }}>
      <SmallCardComponent data={productsBySaleStatus} />
    </div>

    <Heading heading="POPULAR" color="#343434" />
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 55 }}>
      <TwoCardComponent data={productsBySaleStatusPopular} />
    </div>

    <Heading heading="RELEVANCE" color="#343434" />
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 55 }}>
      <ThreeCardComponent data={productsBySaleStatusRelevance} />
    </div>

    
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 55 }}>
      <OneCardComponent data={oneCardImagesSubcategoryByPriority} url={'productlist'} />
    </div>

    <HomeFooter />




  </div>)

}