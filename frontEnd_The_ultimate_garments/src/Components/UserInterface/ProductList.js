import React, { useEffect, useState } from "react";
import { postData } from "../Services/NodeServices";
import { useParams } from "react-router";
import ProductDetailComponent from "./UserComponents/ProductDetailsComponent";
import MainBar from "./UserComponents/MainBar";
import SearchBar from "./UserComponents/SearchBar";
import Filter from "./UserComponents/Filter";
import SecondPageOneCardComponent from "./UserComponents/SecondPageOneCardComponent";
import HomeFooter from "./UserComponents/HomeFooter";

export default function ProductList(props) {
  const [productList, setProductList] = useState([]);
  const [oneCardImagesSubcategoryByPriority, setOneCardImagesSubcategoryByPriority] = useState([])
  
  const {id}=useParams() 
  const fetchAllProductsBySubcategory = async () => {
    var body = { subcategoryid: id };
    const result = await postData(
      "userinterface/fetch_all_products_by_subcategory",body);
    setProductList(result.data)
  };
  useEffect(function () {
   fetchAllProductsBySubcategory()
   fetchOneCardImagesSubcategoryByPriority(2)
  }, []);

  const fetchOneCardImagesSubcategoryByPriority = async (priority) => {
    var body = { 'priority': priority }
    var result = await postData('userinterface/display_all_subcategory_priority', body)
    setOneCardImagesSubcategoryByPriority(result.data)

  }

  return (<div style={{ Width: 'auto'}}>

<div style={{display:'flex',justifyContent:'center',alignItem:'center',textAlign:'center',letterSpacing:'2px',background:'gray'}}>
   {/* <marquee direction="left"> */} FREE SHIPPING ON ORDERS OVER 990₹ {/* </marquee> */}
   </div>
   
    <SearchBar />

    <MainBar />
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
      <SecondPageOneCardComponent data={oneCardImagesSubcategoryByPriority}/>
    </div>


    <div style={{display:'flex'}}>

      <Filter/>

    <div style={{display: 'flex', width: '70%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 55 , marginTop: 55 }}>
     <ProductDetailComponent  data={productList} />
   </div>
   </div>

  <HomeFooter/>

  </div>);
}
