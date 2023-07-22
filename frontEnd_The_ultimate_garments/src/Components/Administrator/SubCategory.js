import { useState, useEffect } from "react";
import { useStyles } from "./SubCategoryCss";
import { TextField, Grid, Button, Avatar } from "@mui/material";
import { getData, postData } from "../Services/NodeServices";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";

export default function SubCategory(props) {
    var classes = useStyles()
    var navigate = useNavigate()
    const [categoryList, setCategoryList] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [bannerPriority, setBannerPriority] = useState('')
    const [subCategoryName, setSubCategoryName] = useState('')
    const [icon, setIcon] = useState({ url: '/icon.png', bytes: '' })
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };


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

    const handleIcon = (event) => {
        setIcon({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('categoryid', categoryId)
        formData.append('subcategoryname', subCategoryName)
        formData.append('icon', icon.bytes)
        formData.append('bannerpriority', bannerPriority)
        var result = await postData('subcategory/add_new_subcategory', formData, true)
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
        setSubCategoryName('')
        setIcon({ url: '/icon.png', bytes: '' })
    }


    const handleChange = (event) => {
        setCategoryId(event.target.value)
    }
    const handlePriority = (event) => {
        setBannerPriority(event.target.value)
    }

    return (
        <div>
            <div className={classes.box}>
                <Grid className={classes.gridStyle} container spacing={2}>
                    <Grid item xs={12} style={{ display: 'flex' }}>
                        <div className={classes.headingText}>
                            Sub Category Interface
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '40%' }}>
                            <Avatar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={'/report.png'} style={{width:42,cursor:'pointer',backgroundColor: isHovering ? '#3498db' : '',color: isHovering ? 'white' : '',padding:'5px',borderRadius:'15px',transition:'0.1s ease-in-out',}} onClick={() => navigate('/dashboard/displayallsubcategory')} variant="square" />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryId}
                                label="Category"
                                onChange={handleChange}
                            >
                                <MenuItem>Choose Category</MenuItem>
                                {fillCategories()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={subCategoryName} onChange={(event) => setSubCategoryName(event.target.value)} fullWidth variant="outlined" label="Sub Category" />
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Banner Priority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={bannerPriority}
                                label="Banner Priority"
                                onChange={handlePriority}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                        <Button onChange={handleIcon} fullWidth variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                        <Avatar
                            alt="Remy Sharp"
                            src={icon.url}
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