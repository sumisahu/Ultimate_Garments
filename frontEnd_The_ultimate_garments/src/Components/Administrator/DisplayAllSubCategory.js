import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Avatar, TextField } from "@mui/material";
import { useStyles } from "./DisplayAllSubCategoryCss";
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

export default function DisplayAllSubCategory(props) {
  var classes = useStyles()
  var navigate = useNavigate()
  const [subCatagories, setSubCategories] = useState([])
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState('')
  const [categoryList, setCategoryList] = useState([])
  const [subCategoryId, setSubCategoryId] = useState('')
  const [subCategoryName, setSubCategoryName] = useState('')
  const [bannerPriority, setBannerPriority] = useState('')
  const [btnStatus, setBtnStatus] = useState('')
  const [oldIcon, setOldIcon] = useState('')
  const [uploadBtn, setUploadBtn] = useState(false)
  const [icon, setIcon] = useState({ url: '/icon.png', bytes: '' })
  const handleIcon = (event) => {
    setIcon({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    setBtnStatus(true)
    setUploadBtn(true)
  }

  const fetchAllSubCategory = async () => {
    var data = await getData('subcategory/display_all_subcategory')
    setSubCategories(data.data)
  }
  useEffect(function () {
    fetchAllSubCategory()
  }, [])

  const handleOpen = (rowData) => {
    setSubCategoryId(rowData.subcategoryid)
    setCategoryId(rowData.categoryid)
    setSubCategoryName(rowData.subcategoryname)
    setBannerPriority(rowData.bannerpriority)
    setOldIcon(`${ServerURL}/images/${rowData.icon}`)
    setIcon({ url: `${ServerURL}/images/${rowData.icon}`, bytes: '' })
    setOpen(true)
  }
  const handleClose = (rowData) => {
    setOpen(false)
  }
  const handleEditSubCaterogy = async () => {
    setOpen(false)
    var body = { categoryid: categoryId, subcategoryname: subCategoryName, bannerpriority:bannerPriority, subcategoryid: subCategoryId }
    var result = await postData('subcategory/edit_subcategory_data', body)
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
    fetchAllSubCategory()
  }
  const handleDeleteSubCategory = async () => {
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
        var body = { subcategoryid: subCategoryId }
        var result = await postData('subcategory/delete_subcategory_data', body)
        if (result.status) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          fetchAllSubCategory()
        } else {
          Swal.fire('Server Error', '', 'error')
        }
      }
    })

  }

  const handleCancel = () => {
    setBtnStatus(false)
    setIcon({ url: oldIcon, bytes: '' })
    setUploadBtn(false)
    setOldIcon('')
  }
  const handleSavePicture = async () => {
    setOpen(false)
    var formData = new FormData()
    formData.append('subcategoryid', subCategoryId)
    formData.append('icon', icon.bytes)
    var result = await postData('subcategory/update_icon', formData, true)
    if (result.result) {
      Swal.fire({
        icon: 'success',
        title: 'Picture Edit Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }

    setBtnStatus(false)
    setUploadBtn(false)
    setOldIcon('')
    fetchAllSubCategory()
  }

  const saveAndCancelButton = () => {
    return (<div>
      {btnStatus ? <div style={{ display: 'flex', width: 250, justifyContent: 'space-evenly' }}><Button onClick={handleSavePicture} color="primary" variant="contained">Save</Button>
        <Button onClick={handleCancel} color="secondary" variant="contained" >Cancel</Button></div> : <></>}
    </div>)
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

  const handleChange = (event) => {
    setCategoryId(event.target.value)
  }

  const handlePriority = (event) => {
    setBannerPriority(event.target.value)
}
  const showSubCategory = () => {
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
                Edit Sub Category Interface
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Category Name"
                  onChange={handleChange}
                >
                  {fillCategories()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField value={subCategoryName} onChange={(event) => setSubCategoryName(event.target.value)} fullWidth variant="outlined" label="Sub Category Name" />
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
            <Grid item xs={6}>
              <Button style={{ backgroundColor: 'green' }} onClick={handleEditSubCaterogy} fullWidth color="primary" variant="contained">Edit</Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{ backgroundColor: 'red' }} onClick={handleDeleteSubCategory} fullWidth color="primary" variant="contained">Delete</Button>
            </Grid>
            <Grid item xs={3} className={classes.center}>
              <Button disabled={uploadBtn} fullWidth color="primary" variant="contained" component="label">
                Upload
                <input onChange={handleIcon} hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.center}>
              <Avatar
                alt="Remy Sharp"
                src={icon.url}
                sx={{ width: 70, height: 70 }}
                variant="square"
              />
            </Grid>
            <Grid item xs={3} className={classes.center}>
              {saveAndCancelButton()}
            </Grid>

          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>

    </div>)
  }


  function displaySubCategories() {
    return (<MaterialTable
      title="List of Sub Category"
      columns={[
        { title: 'Id', field: 'subcategoryid' },
        { title: 'Category', field: 'cn' },
        { title: 'Name', field: 'subcategoryname' },
        { title: 'Banner Priorirt', field: 'bannerpriority' },
        { title: 'Icon', render: (rowData) => <img src={`${ServerURL}/images/${rowData.icon}`} width='30' height='30' style={{ borderRadius: 5 }} /> },
      ]}
      data={subCatagories}
      actions={[
        {
          icon: 'edit',
          tooltip: 'Edit SubCategory',
          onClick: (event, rowData) => handleOpen(rowData)
        }, {
          icon: 'add',
          tooltip: 'Add Sub Category',
          isFreeAction: true,
          onClick: (event) => navigate("/dashboard/subcategory")
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
      {displaySubCategories()}
    </div>
    {showSubCategory()}
  </div>)
}
