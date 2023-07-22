import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from '@mui/material';
import { useStyles } from "./ProductDetailFillingCss";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SizeChart from "./SizeChart";

import { postData } from "../../Services/NodeServices";
import PlusMinusComponent from "./PlusMinusComponent";
import ColorRadio from "./ColorRadio";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductDetailFilling(props) {

  var product = JSON.parse(props.productInfo)
  var classes = useStyles()
  var navigate = useNavigate()



  var cart = useSelector(state => state.cart)
  var selectedProduct = cart[product.productid]
  var keys = Object.keys(cart)
  var selectedQty = null


  if(keys?.length>0)
  {
    selectedQty = selectedProduct?.qty
    product['qty'] = selectedProduct?.qty
    product['color'] = selectedProduct?.color
    product['size'] = selectedProduct?.size
  }



  const [qty, setQty] = useState(selectedQty);

  const [size, setSize] = useState([]);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  const [colors, setColors] = useState(null)
  var dispatch = useDispatch()

  const handleSize = (index) => {
    setSelectedColor(null)
    setQty(null)
    var temp = size.map((item) => {
      return { 'sizeid': item.sizeid, 'status': false }
    })
    temp[index].status = true
    setSelectedSize(temp[index].sizeid)
    console.log("TEMP", temp)
    setSize([...temp])
    fetchAllColors(temp[index].sizeid)
    product['size'] = temp[index].sizeid
    if(selectedSize!=null && selectedColor!=null)
    dispatch({ type: 'ADD_CART', payload: [product.productid, product] })
  }


  const fetchAllColors = async (sizeid) => {

    var result = await postData('userinterface/display_all_color_by_size', { productid: product.productid, sizeid: sizeid })

    var pcolor = JSON.parse(result.data[0].color)

    setColors(pcolor)

  }

  useEffect(function () {
    fetchAllSize()
  }, [])




  const fetchAllSize = async () => {
    var result = await postData('userinterface/display_all_color_by_productid', { productid: product.productid })
    // var sizes=Object.values(JSON.parse(result.data[0].size))
    var sizes = result.data.map((item) => {
      if (keys > 0 && selectedProduct != 'undefined' && selectedProduct?.size == item.sizeid) {
        fetchAllColors(item.sizeid)
        return { 'sizeid': item.sizeid, 'status': true }
      }
      else {
        return { 'sizeid': item.sizeid, 'status': false }
      }
    })

    setSize(sizes)
    //console.log('XXXXXX',sizesJson)


  }

  const showSize = () => {
    return size.map((item, i) => {
      
      
      return (<div onClick={() => handleSize(i)} style={{ border: item.status ? '3px solid #51cccc' : '1px solid #51cccc' }} className={classes.selectionSize} >{item.sizeid}</div>)
    })
  }



  const Check = () => (
    <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>
      Check
    </div>

  )

  const handleQtyChange = (value) => {
    if (selectedSize != null && selectedColor != null) {
      if (value == 0) {
        dispatch({ type: 'DELETE_CART', payload: [product.productid, product] })
      }
      else {
        product['qty'] = value
        product['size'] = selectedSize
        product['color'] = selectedColor
        dispatch({ type: 'ADD_CART', payload: [product.productid, product] })
        setQty(value)
      }

    }
    else {
      alert("Pls Select Size & Color Both")
      setQty(null)
    }
    props.updateCart()
  }

  const handleColor = (value) => {
    setSelectedColor(value)
    setQty(0)
    product['color'] = value
    if(selectedSize!=null && selectedColor!=null)
    dispatch({ type: 'ADD_CART', payload: [product.productid, product] })
  }

  return (<div className={classes.container}>
    <div className={classes.box}>
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <div className={classes.heading1}>{product.productname}</div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.favIcon} ><FavoriteBorderIcon fontSize="medium" /></div>
        </Grid>

        <Grid item xs={12}>
          <div /* className={classes.price} */>
            <span style={{ color: '#000', fontSize: 17, fontWeight: 600 }}>  PRICE: </span>{product.offerprice > 0 ? <><span style={{ color: '#000', fontSize: 17, fontWeight: 700 }}>&#8377;{product.offerprice}</span><span style={{ marginLeft: 7, textDecoration: 'line-through', color: '#a7a7a7', fontSize: 17, fontWeight: 400 }}>&#8377;{product.price}</span><span style={{ marginLeft: 7, color: '#4bb550', fontSize: 17, fontWeight: 600 }}>Save &#8377;{product.price - product.offerprice}</span></> : <><span>&#8377; {product.price}</span><span>Fixed Price</span></>}
          </div>
          <div>Inclusive of All Taxes + Free Shipping</div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.size}>SIZE</div>
        </Grid>

        <Grid item xs={6}>
          <SizeChart />
        </Grid>
        <Grid item xs={12}>
          {showSize()}

        </Grid>
        <Grid item xs={12}>
          {<ColorRadio colorlist={colors} onClick={(value) => handleColor(value)}
            colorName={selectedProduct && selectedProduct.color}

          />}

        </Grid>

        {/*  <Grid item xs={12}>
          <div style={{display:'flex',}}>
            <span style={{fontSize:22,cursor:'pointer',fontWeight:500,}}>QTY:</span>&nbsp;&nbsp;&nbsp;
           
            <span onClick={handlePlus}><Button style={{color:'#000',borderRadius:2,background:'#51cbcc'}}><AddIcon fontSize="small"/></Button></span>  
         <span onClick={handleMinus}><Button style={{marginLeft:14,color:'#000',borderRadius:2,background:'#51cbcc'}}><RemoveIcon fontSize="small"/></Button></span>&nbsp;&nbsp;&nbsp;
        <span style={{fontSize:15,fontWeight:500,border:'2px solid #51cbcc',paddingRight:14,paddingLeft:14,marginTop:0,width:11,paddingTop:3}}> {getValue}</span></div>
        </Grid> */}

        <Grid item xs={6}>
          <PlusMinusComponent value={qty} onChange={handleQtyChange} />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" style={{ background: '#ffb8b8' }} startIcon={<ArrowCircleRightOutlinedIcon />}>Buy Now</Button>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={() => navigate("/home")} fullWidth variant="contained" style={{ background: '#5352ed' }} startIcon={<ArrowCircleRightOutlinedIcon />}>Continue Shopping</Button>
        </Grid>

        <Grid item xs={12}>
          <div style={{ fontWeight: 600 }}>DELIVERY OPTIONS</div>
          <div style={{ border: '1px solid #000', padding: 5 }}>
            <div style={{ fontWeight: 450, fontSize: 13 }}>
              Enter your Pincode to check the delivery time and free pick up options
            </div>
            <div style={{ marginTop: 5 }}>
              <TextField

                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Enter Pincode"
                variant="filled"
                size="small"
                InputProps={{ endAdornment: <Check /> }}
              />
            </div>
            <div className={classes.payment}>
              <CurrencyExchangeIcon />&nbsp;&nbsp;&nbsp; Cash On Delivery
            </div>
            <div className={classes.payment}>
              <LocalShippingIcon />&nbsp;&nbsp;&nbsp;Express Shipping
            </div>
          </div>
        </Grid>

      </Grid>
    </div>
  </div>)
}