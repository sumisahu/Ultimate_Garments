import { useEffect, useState } from "react";
import { useStyles } from "./DisplayAllSizeCss";
import MaterialTable from "material-table";
import { Button, Grid, Avatar, TextField } from "@mui/material";
import { getData, postData, ServerURL } from "../Services/NodeServices";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'S Size',
  'M Size',
  'L Size',
  'XS Size',
  'XL Size',
  'XXL Size',

];



export default function DisplayAllSize(props) {
  var classes = useStyles()
  var navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [sizes, setSizes] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [sizeId, setSizeId] = useState('')
  const [subCategoryId, setSubCategoryId] = useState('')
  const [subCategoryList, setSubCategoryList] = useState([])
  const [productId, setProductId] = useState('')
  const [productList, setProductList] = useState([])
  const [size, setSize] = useState([])

  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSize(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const fetchAllSizes = async () => {
    
    var data = await getData('size/display_all_size')
    setSizes(data.data)
  }
  useEffect(function () {
    fetchAllSizes()
  }, [])

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
    var data = await postData('subcategory/display_subcategory_by_category', { categoryid: cid })
    setSubCategoryList(data.data)
  }

  const fillSubCategories = () => {
    return subCategoryList.map((item) => {
      return (
        <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
      )
    })
  }

  const fetchAllProducts = async (scid) => {
    var data = await postData('products/display_products_by_subcategory', { subcategoryid: scid })
    setProductList(data.data)
  }
  const fillproducts = () => {
    return productList.map((item) => {
      return (
        <MenuItem value={item.productid}>{item.productname}</MenuItem>
      )
    })
  }



  const handleClose = (rowData) => {
    setOpen(false)
  }

  const handleCategoryId = (event) => {
    setCategoryId(event.target.value)
    fetchAllSubCategory(event.target.value)
  }

  const handleSubCategoryId = (event) => {
    setSubCategoryId(event.target.value)
    fetchAllProducts(event.target.value)
  }

  const handleProductId = (event) => {
    setProductId(event.target.value)
  }

  const handleOpen = (rowData) => {
    fetchAllSubCategory(rowData.categoryid)
    fetchAllProducts(rowData.subcategoryid)
    setSizeId(rowData.sizeid)
    setCategoryId(rowData.categoryid)
    setSubCategoryId(rowData.subcategoryid)
    setProductId(rowData.productid)
    setSize(JSON.parse(rowData.size))
    setOpen(true)
  }

  const handleEditSize = async () => {
    setOpen(false)
    var body = { categoryid: categoryId, subcategoryid: subCategoryId, productid: productId, size:JSON.stringify(size), sizeid: sizeId }
    var result = await postData('size/edit_size_data', body)
    if (result.status) {
      Swal.fire({
        icon: 'success',
        title: 'Record Edit Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    fetchAllSizes()
  }
  const handleDeleteSize = async () => {
    setOpen(false)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (res) => {
      if (res.isConfirmed) {
        var body = { sizeid: sizeId }
        var result = await postData('size/delete_size_data', body)
        if (result.status) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          fetchAllSizes()
        } else {
          Swal.fire('Server Error', '', 'error')
        }
      }
    })
  }
  const showSize = () => {
    return (<div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Grid className={classes.gridStyle} container spacing={2}>
            <Grid item className={classes.headingText} xs={12}>
              <div style={{ backgroundColor: '#01579b', padding: '3%', color: '#fff', display: 'flex', justifyContent: 'center', borderRadius: '2px', fontFamily: 'Georgia' }}>
                Edit Size Interface
              </div>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Category Name"
                  onChange={handleCategoryId}
                >
                  <MenuItem>Choose Category</MenuItem>
                  {fillCategories()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label2">Sub Category Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={subCategoryId}
                  label="Sub Category Name"
                  onChange={handleSubCategoryId}
                >
                  <MenuItem>Choose Sub Category</MenuItem>
                  {fillSubCategories()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label3">Product Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label3"
                  id="demo-simple-select3"
                  value={productId}
                  label="Product Name"
                  onChange={handleProductId}
                >
                  <MenuItem>Choose Products</MenuItem>
                  {fillproducts()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label4">Size</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label4"
                  id="demo-multiple-checkbox4"
                  multiple
                  value={size}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={size.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button style={{ backgroundColor: 'green' }} onClick={handleEditSize} fullWidth color="primary" variant="contained">Edit</Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{ backgroundColor: 'red' }} onClick={handleDeleteSize} fullWidth color="primary" variant="contained">Delete</Button>
            </Grid>

          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>

    </div>)
  }




  function displaySize() {
    return (
      <MaterialTable
        title="List of Size"
        columns={[
          { title: 'Id', field: 'sizeid' },
          { title: 'Category', field: 'cn' },
          { title: 'SubCategory', field: 'scn' },
          { title: 'Product', field: 'pn' },
          { title: 'Size', field: 'size' },

        ]}
        data={sizes}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Size',
            onClick: (event, rowData) => handleOpen(rowData)
          }, {
            icon: 'add',
            tooltip: 'Add Size',
            isFreeAction: true,
            onClick: (event) => navigate("/dashboard/size")
          }
        ]}
        options={{
          rowStyle: {

          }, headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },

        }}
      />
    )

  }


  return (<div>
    <div className={classes.box}>
      {displaySize()}
    </div>
    {showSize()}
  </div>)
}