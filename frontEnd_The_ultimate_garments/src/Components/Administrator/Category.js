import { useState } from "react";
import { useStyles } from "./CategoryCss";
import { Avatar, TextField, Grid, Button } from "@mui/material";
import { postData } from "../Services/NodeServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function Category(props) {
    var classes = useStyles()
    var navigate=useNavigate()
    const [categoryName, setCategoryName] = useState('')
    const [icon, setIcon] = useState({ url: '/icon.png', bytes: '' })
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };


    const handleIcon = (event) => {
        setIcon({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }
    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('categoryname', categoryName)
        formData.append('icon', icon.bytes)
        var result = await postData('category/add_new_category', formData, true)
        if(result.result){
            Swal.fire({
                icon: 'success',
                title: 'Record Submitted Successfully',
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }

    }

    const handleReset=()=>{
        setCategoryName('')
        setIcon({url: '/icon.png', bytes: ''})
    }


    return (
        <div>
            <div className={classes.box}>
                <Grid className={classes.gridStyle} container spacing={2}>
                    <Grid item  xs={12} style={{display:'flex'}}>
                        <div className={classes.headingText}>
                        Category Interface
                        </div>
                        <div style={{display:'flex', justifyContent:'flex-end',width:'42%'}}>
                            <Avatar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={'/report.png'} style={{width:42,cursor:'pointer',backgroundColor: isHovering ? '#3498db' : '',color: isHovering ? 'white' : '',padding:'5px',borderRadius:'15px'}} onClick={()=>navigate('/dashboard/displayallcategory')} variant="square" />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={categoryName} onChange={(event) => setCategoryName(event.target.value)} fullWidth variant="outlined" label="Category" />
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
                        <Button onClick={handleReset} fullWidth variant="contained">Reset</Button>
                    </Grid>

                </Grid>

            </div>

        </div>)
}