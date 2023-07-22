import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import { ShoppingCart } from '@mui/icons-material';
import { getData, postData,ServerURL } from "../../Services/NodeServices"
import { useSelector } from 'react-redux';
import PopCart from './PopCart';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router";

export default function MainBar(props) {
  const navigate = useNavigate();

  var cart=useSelector(state=>state.cart)
  var keys=Object.keys(cart)
  console.log("Header Keys:",keys)
  const [openn,setOpenn]=useState(false)
  const [anchorE2,setAnchorE2]=useState(null)
  const [refresh,setRefresh]=useState(false)
  const handlePopoverOpen=(event)=>{
 
    setAnchorE2(event.currentTarget)
    setOpenn(true)
    setRefresh(!refresh)
    }
  const handlePopoverClose=(event)=>{
 
    setAnchorE2(null)
    setOpenn(false)
    setRefresh(!refresh)
    }

  const [category, setCategory] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [subCategory, setSubCategory] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(anchorEl)
 
  const handleOver = (event)=>{
    event.target.style.background ="#929191"
  }
  const handleOut = (event)=>{
    event.target.style.background ="#fff"
  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
    setCategoryId(event.currentTarget.value)
    fetchAllSubCategories(event.currentTarget.value)

  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };


  const fetchAllCategories = async () => {
    var result = await getData('userinterface/display_all_category')
    setCategory(result.data)

  }

  const fetchAllSubCategories = async (categoryid) => {
    var result = await postData('userinterface/display_all_subcategory', { categoryid: categoryid })
    setSubCategory(result.data)

  }


  const showCategoryMenu = () => {
    return category.map((item) => {

      return (<Button onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleClick} value={item.categoryid} style={{ color: '#000',margin:5,fontFamily:'Sans-serif',fontWeight:400,letterSpacing:'2px' }} id="basic-button">{item.categoryname}</Button>)

    })
  }

  const showSubCategoryMenu = () => {
    return subCategory.map((item) => {

      return (<MenuItem>{item.subcategoryname}</MenuItem>)

    })
  }

  useEffect(function () {
    fetchAllCategories()

  }, [])

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFF' }}>
        <Toolbar>
          <div style={{width:'5%'}}>

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%',right:0 }}> 
            {showCategoryMenu()}


            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {showSubCategoryMenu()}
            </Menu>
          </div>
          <div  onClick={()=>navigate("/mycart")} style={{width:'5%',display:'flex', justifyContent: 'right',alignItems:'center' }}>
          <Badge badgeContent={keys.length} color="primary">
          <ShoppingCart onMouseEnter={handlePopoverOpen}
               onMouseLeave={handlePopoverClose} style={{color:'black'}}/>
          </Badge>
          </div>
        </Toolbar>
      </AppBar>

    </Box>
    <PopCart anchorE2={anchorE2} openn={openn}/>
    </>
  );
}
