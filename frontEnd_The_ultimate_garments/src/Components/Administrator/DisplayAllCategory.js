import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { getData, postData, ServerURL } from "../Services/NodeServices";
import { useStyles } from "./DisplayAllCategoryCss";
import { Button, Grid, Avatar, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";

export default function DisplayAllCategory(props) {
  var classes = useStyles()
  var navigate = useNavigate()
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)
  const [btnStatus, setBtnStatus] = useState(false)
  const [oldIcon, setOldIcon] = useState('')
  const [uploadBtn, setUploadBtn] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const [icon, setIcon] = useState({ url: '/icon.png', bytes: '' })
  const handleIcon = (event) => {
    setIcon({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    setBtnStatus(true)
    setUploadBtn(true)
  }

  const fetchAllCategory = async () => {
    var data = await getData('category/display_all_category')
    setCategories(data.data)
  }
  useEffect(function () {

    fetchAllCategory()

  }, [])

  const handleOpen = (rowData) => {
    setCategoryId(rowData.categoryid)
    setCategoryName(rowData.categoryname)
    setOldIcon(`${ServerURL}/images/${rowData.icon}`)
    setIcon({ url: `${ServerURL}/images/${rowData.icon}`, bytes: '' })
    setOpen(true)
  }
  const handleClose = () => { 
    setOpen(false)
  }

  const handleEditCategory = async () => {
    setOpen(false)
    var body = { categoryname: categoryName, categoryid: categoryId }
    var result = await postData('category/edit_category_data', body)
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
    fetchAllCategory()
  }
  const handleDeleteCategory = async () => {
    setOpen(false)
    Swal.fire({
      title: 'Do you want to delete the category?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then(async (res) => {
      /* Read more about isConfirmed, isDenied below */
      if (res.isConfirmed) {
        var body = { categoryid: categoryId }
        var result = await postData('category/delete_category_data', body)

        if (result.status) {
          Swal.fire('Deleted!', '', 'success')
          fetchAllCategory()
        }
        else {
          Swal.fire('Server Error', '', 'error')
        }

      } else if (res.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
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
    formData.append('categoryid', categoryId)
    formData.append('icon', icon.bytes)
    var result = await postData('category/update_icon', formData, true)
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
    fetchAllCategory()
  }

  const saveAndCancelButton = () => {
    return (<div>
      {btnStatus ? <div style={{ display: 'flex', width: 250, justifyContent: 'space-evenly' }}><Button onClick={handleSavePicture} color="primary" variant="contained">Save</Button>
        <Button color="secondary" variant="contained" onClick={handleCancel}>Cancel</Button></div> : <></>}
    </div>)
  }



  const showCategory = () => {
    return (<div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <div>

            <Grid className={classes.gridStyle} container spacing={2}>
              <Grid item className={classes.headingText} xs={12}>
                <div style={{ backgroundColor: '#01579b', padding: '2%', color: '#fff', display: 'flex', justifyContent: 'center', borderRadius: '2px', fontFamily: 'Georgia' }}>
                  Edit Category Interface
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField value={categoryName} onChange={(event) => setCategoryName(event.target.value)} fullWidth variant="outlined" label="Category" />
              </Grid>
              <Grid item xs={6}>
                <Button style={{ backgroundColor: 'green' }} onClick={handleEditCategory} color="primary" fullWidth variant="contained">Edit</Button>
              </Grid>
              <Grid item xs={6}>
                <Button style={{ backgroundColor: 'red' }} color="primary" onClick={handleDeleteCategory} fullWidth variant="contained">Delete</Button>
              </Grid>
              <Grid item xs={3} className={classes.center}>
                <Button disabled={uploadBtn} color="primary" fullWidth variant="contained" component="label">
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
              <Grid item xs={6} className={classes.center}>
                {saveAndCancelButton()}
              </Grid>


            </Grid>

          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

    </div>)

  }


  function displayCategories() {
    return (
      <MaterialTable
        title="List of Categories"
        columns={[
          { title: 'Id', field: 'categoryid' },
          { title: 'Name', field: 'categoryname' },
          { title: 'Icon', render: (rowData) => <img src={`${ServerURL}/images/${rowData.icon}`} width='30' height='30' style={{ borderRadius: 5 }} /> },
        ]}
        data={categories}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Category',
            onClick: (event, rowData) => handleOpen(rowData)
          },
          {
            icon: 'add',
            tooltip: 'Add Category',
            isFreeAction: true,
            onClick: (event) => navigate("/dashboard/category")
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
      {displayCategories()}
      {showCategory()}
    </div>
   
  </div>
  )
}