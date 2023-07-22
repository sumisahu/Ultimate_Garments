import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { ServerURL,postData} from "../../Services/NodeServices";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    
    


    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



export default function SignupDialog(props) {
    var navigate=useNavigate() 
    var dispatch=useDispatch()
    const [openDetail, setOpenDetail] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [value, setValue] = useState('female');
    const [open, setOpen] = useState(props.open);
   
    const [userData,setUserData ]=useState([])
    const [openOtp, setOpenOtp] = useState(false);
    const [otp, setOtp] = useState('');
    const [inputOtp, setInputOtp] = useState('');
    const [mobileNumber,setMobileNumber]=useState('')
    const [emailid,setEmailid]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [dateofbirth,setDateofbirth]=useState('')
    const [gender,setGender]=useState('')

    
    const fetchUserData=async()=>{
    var result=await postData('userinterface/check_user_mobilenumber',{mobilenumber:mobileNumber})
    
    setUserData(result)
    

    }
   const generateOtp=()=>{
    fetchUserData()
   var otp=parseInt(Math.random()*8999)+1000
   alert(otp)
   setOtp(otp)


   }



   useEffect(function(){setOpen(props.open)},[props])

   
   
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleDetailClickOpen = (scrollType) => () => {
 
        if(otp==inputOtp)
{        
        if(userData.status)
        { alert(JSON.stringify(userData.data))
        dispatch({type:'ADD_USER',payload:[userData.data.mobilenumber,userData.data]})
            navigate("/address")

        }
        else{
        setOpenDetail(true);
        setScroll(scrollType);
        setOpen(false)
        setOpenOtp(false)}

}    
else
{
    alert("Invalid Otp.......")
}
    };
    const handleDetailClose = () => {
        setOpenDetail(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (openDetail) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openDetail]);

    const handleSubmit=async()=>{
     var body={mobilenumber:mobileNumber,emailid:emailid,firstname:firstname,lastname:lastname,dateofbirth:dateofbirth,gender:gender}
     var result=await postData('userinterface/submit_userdata',body)
     if(result.status)
     { 
       
        dispatch({type:'ADD_USER',payload:[mobileNumber,body]})


        navigate("/address")}
     else
     { alert("Pls Check the input vlaues....")}
    }
    const signupDetailDialog = () => {
        return (<div>
            <Dialog
                open={openDetail}
                onClose={handleDetailClose}
                PaperProps={{ sx: { position: "fixed", top: 40, right: 70, m: 0 } }}
                fullWidth
                maxWidth="xs"
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >   
                <DialogTitle id="scroll-dialog-title">
                <div style={{width:70,height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{ fontSize: 16, width: "20%", fontWeight: 700 }}>
              The Ultimate Garments
            </div>
           </div>
                    <div style={{ fontSize: 40,color:'#02475b' }}>  Welcome to TUG</div>
                    <div style={{ fontSize: 15, fontWeight: 400,color:'#0087BA' }}>Enter your details. Let us quickly get to know you so that we can get you the best help :)</div>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div style={{ fontSize: 14, fontWeight: 600 }}>
                                First Name
                            </div>
                            <TextField  onChange={(event)=>setFirstname(event.target.value)} fullWidth placeholder='First Name' id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={(event)=>setLastname(event.target.value)} fullWidth placeholder='Last Name' id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ fontSize: 14, fontWeight: 600 }}>
                                Date Of Birth
                            </div>
                            <TextField  onChange={(event)=>setDateofbirth(event.target.value)} fullWidth placeholder='dd/mm/yyyy' id="standard-basic" variant="standard" />
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{ fontSize: 14, fontWeight: 600 }}>
                                Gender
                            </div>
                            <FormControl>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ fontSize: 14, fontWeight: 600 }}>
                                Email Address (Optional)
                            </div>
                            <TextField onChange={(event)=>setEmailid(event.target.value)} fullWidth placeholder='name@email.com' id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <FormControlLabel
                                    style={{ fontSize: 2 }}
                                    control={<Checkbox color="success" />}
                                    label="send me personalised health tips & offers on whatsapp"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ background: 'gray', padding: 14 }}>
                                <CardGiftcardIcon /> <div style={{ fontSize: 12 }}>  Do You Have A Referral Code? (Optional)</div>
                                <TextField fullWidth placeholder='Enter Referral Code' id="standard-basic" variant="standard" />
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div style={{ padding: 14 }}>
                                <Button onClick={handleSubmit} style={{ background: 'gray', color: '#000' }} fullWidth variant="contained">SUBMIT</Button>
                            </div>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>)
    }






    
    const handleOtpClickOpen = () => {
        generateOtp()
        
        setOpenOtp(true);
        setOpen(false)
    };
    const handleOtpClose = () => {
        setOpenOtp(false);
    };
    const handleBackToClickOpen = () => {
        setOpen(true);
        setOpenOtp(false)
    };

    const signupOtpDialog = () => {
        return (<div>
            <BootstrapDialog
                onClose={handleOtpClose}
                PaperProps={{ sx: { position: "fixed", top: 40, right: 70, m: 0 } }}
                fullWidth
                maxWidth="xs"
                aria-labelledby="customized-dialog-title"
                open={openOtp}
            >
                <div style={{ fontSize: 40, marginLeft: 15, marginTop: 15, cursor: 'pointer' }}> <ArrowBackIcon fontSize='large' onClick={handleBackToClickOpen} /></div>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleOtpClose}>
                    <div style={{ fontSize: 40,color:'#02475b' }}>great</div>
                </BootstrapDialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <div style={{ fontSize: 16, fontWeight: '500',color:'#0087BA' }}>
                                Now type in the OTP sent to you for authentication
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField onChange={(event)=>setInputOtp(event.target.value)} fullWidth id="standard-basic" variant="standard" />
                            <div style={{ fontSize: 13 }}>Resend OTP</div>
                            <div>
                                or
                            </div>
                        </Grid>
                        <Grid  item xs={4}>

                            <div style={{ diplay: 'flex', justifyContent: 'center', alignItem: 'center', background: 'gray', height: 60, width: 60, borderRadius: 50, cursor: 'pointer',}}>
                             <Button variant="contained" onClick={handleDetailClickOpen('paper')} style={{ background: 'gray', color: '#000', height: 63, width: 63, borderRadius: 60 }}>    <ArrowForwardIcon fontSize='large'  /></Button>
                            </div>

                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" style={{ background: 'gray', color: '#000' }}><CallIcon /> GET OTP ON CALL</Button>
                        </Grid>

                    </Grid>
                </DialogContent>
            </BootstrapDialog>
        </div>)
    }


   

   
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const signupDialog = () => {
        return (<div>
            <BootstrapDialog
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                PaperProps={{ sx: { position: "fixed", top: 40, right: 70, m: 0 } }}
                fullWidth
                maxWidth="xs"
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div style={{ fontSize: 40,color:'#02475b' }}>Hi</div>
                </BootstrapDialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div style={{ fontSize: 18, fontWeight: '500',color:'#0087BA' }}>
                                Please enter your mobile number to login
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Mobile Number</InputLabel>
                                <Input 
                                    id="standard-adornment-mobileno"
                                    onChange={(event)=>setMobileNumber(event.target.value)}
                                    startAdornment={<InputAdornment position="start">+91</InputAdornment>}
                                />
                            </FormControl>
                            <div style={{ fontSize: 13 }}>OTP will be sent to this number by SMS and whatsapp..</div>
                            <div style={{ fontSize: 13 }}>
                                <Checkbox color="primary" />
                                    By signing up, I agree to the Privacy &nbsp;&nbsp;&nbsp;&nbsp;Policy, Terms and Conditions of TUG.
                               
                            </div>
                        </Grid>
                        <Grid  item xs={4}>

                            <div style={{ diplay: 'flex', justifyContent: 'center', alignItem: 'center', background: 'gray', height: 60, width: 60, borderRadius: 50, cursor: 'pointer' }}>
                             <Button variant="contained" onClick={handleOtpClickOpen} style={{ background: 'gray', color: '#000', height: 63, width: 63, borderRadius: 60, }}>   <ArrowForwardIcon fontSize='large'/></Button>
                            </div>

                        </Grid>

                    </Grid>
                </DialogContent>
            </BootstrapDialog>
        </div>)
    }





    return (<div>
 
        {signupDialog()}
        {signupOtpDialog()}
        {signupDetailDialog()}
    </div>)
}