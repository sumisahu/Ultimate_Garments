import { useState, useEffect } from "react";
import { useStyles } from "./ProductsCss";
import { Avatar, TextField, Grid, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { postData, getData } from "../Services/NodeServices";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";

export default function Products(props) {
    var classes = useStyles()
    var navigate=useNavigate()
    const [categoryId, setCategoryId] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [subCategoryId, setSubCategoryId] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [status, setStatus] = useState('continue')
    const [saleStatus, setSaleStatus] = useState('')
    const [picture, setPicture] = useState({ url: '/icon.png', bytes: '' })
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };

    const handlePicture = (event) => {
        setPicture({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }

    const fetchAllCategory = async () => {
        var data = await getData('category/display_all_category')
        setCategoryList(data.data)
    }
    
    useEffect(function () {
        fetchAllCategory()
    }, [])
    

    const fillCategories = () => {
        return categoryList.map((item) => {
            return (
                <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
            )
        })
    }
    const fetchAllSubCategory = async (cid) => {
        var data = await postData('subcategory/display_subcategory_by_category',{categoryid:cid})
        setSubCategoryList(data.data)
    }

    const fillSubCategories = () => {
        return subCategoryList.map((item) => {
            return (
                <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
            )
        })
    }

    const handleSaleStatus = (event) => {
        setSaleStatus(event.target.value)
    }

    const handleCategoryId = (event) => {
        setCategoryId(event.target.value)
        fetchAllSubCategory(event.target.value)
    }

    const handleSubCategoryId = (event) => {
        setSubCategoryId(event.target.value)
    }

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('categoryid', categoryId)
        formData.append('subcategoryid', subCategoryId)
        formData.append('productname', productName)
        formData.append('price', price)
        formData.append('offerprice', offerPrice)
        formData.append('stock', stock)
        formData.append('description', description)
        formData.append('rating', rating)
        formData.append('status', status)
        formData.append('salestatus', saleStatus)
        formData.append('picture', picture.bytes)
        var result = await postData('products/add_new_products', formData, true)
        if (result.result) {
            Swal.fire({
                icon: 'success',
                title: 'Record Submitted Successfully',

            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        
    }
    const handleReset = () => {
        setCategoryId('')
        setSubCategoryId('')
        setProductName('')
        setPrice('')
        setOfferPrice('')
        setStock('')
        setDescription('')
        setRating('')
        setStatus('')
        setSaleStatus('')
        setPicture({url: '/icon.png', bytes: ''})
    }


    return (
        <div>
            <div className={classes.box}>
                <Grid className={classes.gridStyle} container spacing={2}>
                <Grid item  xs={12} style={{display:'flex',}}>
                        <div className={classes.headingText}>
                        Product Interface
                        </div>
                        <div  style={{display:'flex', justifyContent:'flex-end',width:'40%'}}>
                            <Avatar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={'/report.png'} style={{width:42,cursor:'pointer',backgroundColor: isHovering ? '#3498db' : '',color: isHovering ? 'white' : '',padding:'5px',borderRadius:'15px'}} onClick={()=>navigate('/dashboard/displayallproducts')} variant="square" />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryId}
                                label="Category"
                                onChange={handleCategoryId}
                            >
                                <MenuItem>Choose Category</MenuItem>
                                {fillCategories()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label1">Sub Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label1"
                                id="demo-simple-select1"
                                value={subCategoryId}
                                label="Sub Category"
                                onChange={handleSubCategoryId}
                            >
                               <MenuItem>Choose Sub Category</MenuItem>
                                {fillSubCategories()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField value={productName} onChange={(event) => setProductName(event.target.value)} fullWidth variant="outlined" label="Products" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField value={price} onChange={(event) => setPrice(event.target.value)} fullWidth variant="outlined" label="Price" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField value={offerPrice} onChange={(event) => setOfferPrice(event.target.value)} fullWidth variant="outlined" label="Offer Price" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField value={stock} onChange={(event) => setStock(event.target.value)} fullWidth variant="outlined" label="Stock" />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField value={description} onChange={(event) => setDescription(event.target.value)} fullWidth variant="outlined" label="Description" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField value={rating} onChange={(event) => setRating(event.target.value)} fullWidth variant="outlined" label="Rating" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row value={status}

                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel onChange={(event) => setStatus(event.target.value)} value="continue" control={<Radio />} label="Continue" />
                                <FormControlLabel onChange={(event) => setStatus(event.target.value)} value="discontinue" control={<Radio />} label="Discontinue" />

                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sale Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={saleStatus}
                                label="Sale Status"
                                onChange={handleSaleStatus}
                            >
                                <MenuItem value="Trending">Trending</MenuItem>
                                <MenuItem value="Popular">Popular</MenuItem>
                                <MenuItem value="Relevance">Relevance</MenuItem>
                                <MenuItem value="Combo">Combo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} className={classes.center}>
                        <Button onChange={handlePicture} fullWidth variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                        <Avatar
                            alt="Remy Sharp"
                            src={picture.url}
                            sx={{ width: 70, height: 70 }}
                            variant="square"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={handleReset} variant="contained">Reset</Button>
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}