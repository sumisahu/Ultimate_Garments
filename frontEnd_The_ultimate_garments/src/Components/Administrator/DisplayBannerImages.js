import { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { Button, Grid, Avatar, TextField } from "@mui/material";
import { getData, postData, ServerURL } from "../Services/NodeServices";
import { useStyles } from "./DisplayBannerImagesCss";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";
import { DropzoneArea } from 'material-ui-dropzone'

export default function DisplayBannerImages(props){

    const classes = useStyles()
    const [banners, setBanners]=useState([])
    const [bannerId, setBannerId]=useState([])
    const [open, setOpen] = useState(false)
    const [getFiles, setFiles] = useState([])
    const [bannerImages, setBannerImages] = useState('')


    const fetchBanners=async()=>{
      var result=await getData('bannerimages/display_banners')
       var tempo= JSON.parse(result.data.bannerid)
       setBannerId(tempo)
        var temp=JSON.parse(result.data.bannerpictures)
  
        setBanners(temp)
    }
      useEffect(function(){fetchBanners()},[])

      const setImageInSlider = () => {
        return banners.map((item) => {
           return (<div>
              <img src={`${ServerURL}/images/${item}`} width='10%'/>
              
           </div>)
        })
     }


     const handleOpen = (rowData) => {
          
     /*setOldIcon(`${ServerURL}/images/${rowData.icon}`)
      setIcon({ url: `${ServerURL}/images/${rowData.icon}`, bytes: '' }) */
      setOpen(true)
    }
    const handleClose = () => { 
     
      setOpen(false)
    }

    const handleSave = (files) => {
      //Saving files to state for further use and closing Modal.
      setFiles(files)
  }


    const showBanner = () => {
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


                <Grid item xs={12} style={{ display: 'flex' }}>
                    <div className={classes.headingText} >
                        Banners Interface
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <DropzoneArea
                        src={banners}
                        onChange={handleSave}
                        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                        filesLimit={6}
                        maxFileSize={5000000}
                        dropzoneText={"Drag and drop an image here or click"}
                        
                    />
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
  
  


    function displayBannerData() {
        return (
          <MaterialTable
            title="List of BannerImages"
            columns={[
              { title:'Banner Id' ,render: (rowData) =>  bannerId},
              { title: 'bannerpictures', render: (rowData) => setImageInSlider() },
              
            ]}
            data={[
              {bannerId}
            ]}  
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit banners',
                onClick: (event, rowData) => handleOpen(rowData)
              },
             
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
    


    return(<div>
        <div className={classes.box}>
        {displayBannerData()}
        </div>
        {showBanner()}
    </div>)
}
