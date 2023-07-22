import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ServerURL } from "../../Services/NodeServices";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export default function MyAccountComponent(props){
   const [showOrer, setShoworder]= useState(true) 
   const [showAddress, setShowAddress]= useState(false) 
   const [showProfile, setShowProfile]= useState(false) 
   const [showWishlist, setShowWishlist]= useState(false) 
   const [showCoupons, setShowCoupons]= useState(false) 
   const [showHelpCenter, setShowHelpCenter]= useState(false)
   const [showCopiedTUG100, setShowCopiedTUG100]= useState(false) 
   const [showCopiedTUG200, setShowCopiedTUG200]= useState(false) 
   const [showCopiedTUG250, setShowCopiedTUG250]= useState(false) 
   const [showCopiedTUG400, setShowCopiedTUG400]= useState(false) 

   const handleTUG100=()=>{
     navigator.clipboard.writeText('TUG100')
    setShowCopiedTUG100(true)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
  }
  const handleTUG200=()=>{
    navigator.clipboard.writeText('TUG200')
    setShowCopiedTUG200(true)
    setShowCopiedTUG100(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }
  const handleTUG250=()=>{
    navigator.clipboard.writeText('TUG250')
    setShowCopiedTUG250(true)
    setShowCopiedTUG200(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG400(false)
   }
  const handleTUG400=()=>{
    navigator.clipboard.writeText('TUG400')
    setShowCopiedTUG400(true)
    setShowCopiedTUG250(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG100(false)
   }



   const handleOrder=()=>{
    setShoworder(true)
    setShowAddress(false)
    setShowProfile(false)
    setShowWishlist(false)
    setShowCoupons(false)
    setShowHelpCenter(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }
   const handleAddress=()=>{
      setShowAddress(true)
    setShoworder(false)
    setShowProfile(false)
    setShowWishlist(false)
    setShowCoupons(false)
    setShowHelpCenter(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }
   const handleProfile=()=>{
      setShowProfile(true)
      setShowAddress(false)
    setShoworder(false)
    setShowWishlist(false)
    setShowCoupons(false)
    setShowHelpCenter(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }
   const handleWishlist=()=>{
      setShowWishlist(true)
      setShowProfile(false)
      setShowAddress(false)
    setShoworder(false)
    setShowCoupons(false)
    setShowHelpCenter(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }

   const handleCoupons=()=>{
      setShowCoupons(true)
      setShowWishlist(false)
      setShowProfile(false)
      setShowAddress(false)
    setShoworder(false)
    setShowHelpCenter(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }

   const handleHelpCenter=()=>{
      setShowHelpCenter(true)
      setShowCoupons(false)
      setShowWishlist(false)
      setShowProfile(false)
      setShowAddress(false)
     setShoworder(false)
    setShowCopiedTUG100(false)
    setShowCopiedTUG200(false)
    setShowCopiedTUG250(false)
    setShowCopiedTUG400(false)
   }

    return(
        <div style={{display:'flex',flexWrap:'wrap',background:'#fff',width:'100%',marginTop:8 }}>
        <div style={{display:'flex',flexWrap:'wrap',border:'2px solid #ABABAB',margin:20,width:'100%',padding:10,background:'#fff'}}>
        <Grid container spacing={2}>
         

       <Grid item xs={3}>
        <div style={{border:'1px solid #808080'}}>
        <div style={{background:'#D5D5D5',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:40}}>
        <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #D5D5D5',borderRadius:50,fontSize:60,fontWeight:500,width:70,fontFamily:'sans-serif'}}>
                    H  
        </div>
        </div >
        <div style={{background:'#D5D5D5',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400}}>
        HEMU
        </div>
        <div style={{background:'#D5D5D5',color:'#808080',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:12,fontWeight:400,paddingBottom:40}}>
        #The Ultimate Garments
        </div>

        <div onClick={handleOrder} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showOrer ? '#000' : '#808080'}}>
            Order
        </div>
        <hr/>

        <div onClick={handleAddress} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showAddress ? '#000' : '#808080'}}>
            Address
        </div>
        <hr/>

        <div onClick={handleProfile} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showProfile ? '#000' : '#808080'}}>
            Profile
        </div>
        <hr/>

        <div onClick={handleWishlist} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showWishlist ? '#000' : '#808080'}}>
        Wishlist
        </div>
        <hr/>

        <div onClick={handleCoupons} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showCoupons ? '#000' : '#808080'}}>
        Coupons
        </div>
        <hr/>
        <div onClick={handleHelpCenter} style={{background:'#fff',letterSpacing:1,fontSize:15,fontWeight:500,padding:15,cursor:'pointer',color: showHelpCenter ? '#000' : '#808080'}}>
        Help Center
        </div>
        <hr/>

        <div style={{background:'#fff',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,paddingBottom:7,alignItems:'center'}}>
        <div style={{background:'#51cbcc',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,width:150,padding:5,borderRadius:3,cursor:'pointer'}}>
        LOGOUT
        </div>
        </div>
        </div>
       </Grid>


       <Grid item xs={5}>
       {showOrer?
        <div style={{/* border:'2px solid 746f6f', */marginTop:50}}> 
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',padding:15,fontWeight:700,fontSize:16}}>
                 <img src={`${ServerURL}/images/empty.gif`} style={{width:'60%',height:'auto',}} />
            </div>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',fontWeight:300,fontSize:35,textDecoration:'underline'}}>
             Haven't ordered yet?
            </div>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',fontWeight:300,fontSize:15,}}>
             Explore and shop the coolest fashion now!
            </div>
            </div>:null}


            {showAddress?
            <div style={{border:'1px solid #746f6f',padding:5,marginTop:10}}> 
              
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',fontWeight:700,fontSize:20}}>
            Delivery Info
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, }}>
               Full Name
            </div>
            <div>
            <TextField fullWidth  placeholder='Full Name' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
               Phone Number
            </div>
            <div>
            <TextField fullWidth  placeholder='Phone Number' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
               Alternate No.(Optional)
            </div>
            <div>
            <TextField fullWidth  placeholder='Alternate Number' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
               Pincode
            </div>
            <div>
            <TextField fullWidth  placeholder='Pincode' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
               Address
            </div>
            <div>
            <TextField fullWidth  placeholder='Address' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
               Landmark(Optional)
            </div>
            <div>
            <TextField fullWidth  placeholder='Landmark' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
            Locality/Town
            </div>
            <div>
            <TextField fullWidth  placeholder='Locality/Town' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
            City
            </div>
            <div>
            <TextField fullWidth  placeholder='City' id="standard-basic" variant="standard" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
            State
            </div>
            <div>
            <TextField fullWidth  placeholder='State' id="standard-basic" variant="standard" />
            </div>
            <div style={{background:'#fff',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,paddingBottom:7,alignItems:'center'}}>
             <div style={{background:'#51cbcc',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,width:250,padding:5,borderRadius:3,cursor:'pointer',marginTop:10}}>
                SAVE
              </div>
             </div>



            </div> :null}
             {showProfile?
            <div style={{border:'1px solid #746f6f',padding:5,marginTop:10}}> 
              
            <div style={{background:'#fff',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:30,paddingBottom:30}}>
        <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #fff',borderRadius:50,fontSize:60,fontWeight:500,width:70,fontFamily:'sans-serif'}}>
                    H  
        </div>
        </div >
              <div style={{ fontSize: 13, fontWeight: 300, }}>
                 First Name
              </div>
              <div>
              <TextField fullWidth  placeholder='First Name' id="standard-basic" variant="standard" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
                 Last Name
              </div>
              <div>
              <TextField fullWidth  placeholder='Last Name' id="standard-basic" variant="standard" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
                 Email ID
              </div>
              <div>
              <TextField fullWidth  placeholder='name@gmail.com' id="standard-basic" variant="standard" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
                 Birth Date
              </div>
              <div>
              <TextField type="date" fullWidth  placeholder='dd/mm/yy' id="standard-basic" variant="standard" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
                 Phone Number
              </div>
              <div>
              <TextField fullWidth  placeholder='Phone Number' id="standard-basic" variant="standard" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 300,marginTop:15 }}>
                 Gender
              </div>
              <div>
              <FormControl>
            <RadioGroup
             row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
             <FormControlLabel value="male" control={<Radio />} label="Male" />
             <FormControlLabel value="female" control={<Radio />} label="Female" />
             <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
              </div>
             
              <div>
              <Checkbox {...label}  /><span style={{fontSize:14}}>I want to receive order updates on WhatsApp</span>
              </div>
              <div style={{background:'#fff',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,paddingBottom:7,alignItems:'center'}}>
             <div style={{background:'#51cbcc',color:'#000',display:'flex',flexWrap:'wrap',justifyContent:'center',letterSpacing:1,fontSize:20,fontWeight:400,width:250,padding:5,borderRadius:3,cursor:'pointer'}}>
                SAVE CHANGES
              </div>
             </div>
              
              </div>:null}

              {showWishlist?
        <div style={{/* border:'2px solid red', */marginTop:50}}> 
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',padding:15,fontWeight:700,fontSize:16}}>
                 <img src={`${ServerURL}/images/empty.gif`} style={{width:'60%',height:'auto',}} />
            </div>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',fontWeight:300,fontSize:35,textDecoration:'underline'}}>
             Haven't ordered yet?
            </div>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff',fontWeight:300,fontSize:15,}}>
             Explore and shop the coolest fashion now!
            </div>
            </div>:null}
              
              {showCoupons?
              <div style={{marginLeft:80}}>
              <div style={{border:'5px solid #000',width:253,borderRadius:5,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              
              
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:30,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
                    ₹100 <sup style={{fontSize:12}}>Off</sup>
              </div >
             
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:20,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Min. Cart Value ₹999
              </div >
       
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Applicable on All orders
              </div >
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2,paddingBottom:5}}>
             <span style={{padding:2,border:'1px solid #fff'}}>TUG100</span>&nbsp;&nbsp;
            {showCopiedTUG100?null: <span  onClick={handleTUG100}  style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copy</span>}
            {showCopiedTUG100? <span   style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copied</span>:null}
              </div>
             
              </div>

              <div style={{border:'5px solid #000',width:253,borderRadius:5,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',marginTop:30}}>
              
              
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:30,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
                ₹200 <sup style={{fontSize:12}}>Off</sup>
              </div >
             
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:20,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Min. Cart Value ₹1999
              </div >
       
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Applicable on All orders
              </div >
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2,paddingBottom:5}}>
             <span style={{padding:2,border:'1px solid #fff'}}>TUG200</span>&nbsp;&nbsp;
             {showCopiedTUG200?null:<span onClick={handleTUG200}  style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copy</span>}
            {showCopiedTUG200? <span style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copied</span>:null}
              </div >

              </div>

              <div style={{border:'5px solid #000',width:253,borderRadius:5,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',marginTop:30}}>
              
              
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:30,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
               ₹250 <sup style={{fontSize:12}}>Off</sup>
              </div >
             
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:20,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Min. Cart Value ₹2999
              </div >
       
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Applicable on All orders
              </div >
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2,paddingBottom:5}}>
             <span style={{padding:2,border:'1px solid #fff'}}>TUG250</span>&nbsp;&nbsp;
             {showCopiedTUG250?null: <span onClick={handleTUG250}  style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copy</span>}
             {showCopiedTUG250? <span style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copied</span>:null}
              </div >

              </div>

              <div style={{border:'5px solid #000',width:253,borderRadius:5,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',marginTop:35}}>
              
              
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:30,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
               ₹400 <sup style={{fontSize:12}}>Off</sup>
              </div >
             
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:20,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Min. Cart Value ₹3999
              </div >
       
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2}}>
             Applicable on All orders
              </div >
             <div style={{background:'#000',color:'#fff',display:'flex',flexWrap:'wrap',justifyContent:'center',border:'2px solid #000',fontSize:14,fontWeight:500,width:250,fontFamily:'sans-serif',letterSpacing:2,paddingBottom:5}}>
             <span style={{padding:2,border:'1px solid #fff'}}>TUG400</span>&nbsp;&nbsp;
             {showCopiedTUG400?null:<span onClick={handleTUG400}  style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copy</span>}
             {showCopiedTUG400?<span style={{background:'#51CBCC',cursor:'pointer',padding:2,borderRadius:2}}>Copied</span>:null}
              </div >

              </div>
              </div>:null}

               {showHelpCenter?
              <div style={{border:'1px solid #746f6f',marginTop:90,marginLeft:2}}>
               <div style={{padding:9,paddingLeft:18,background:'#f2f2f2'}}>
               NEED HELP WITH THIS ORDER
               </div>
               
               <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>My order is not delivered</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{fontSize:15,color:'#746f6f'}}> We sincerely apologize for the unpleasant experience.
           We’ll try our best to resolve your query as soon as possible.</div>
           <div style={{background:'#51cbcc',width:98,padding:5,borderRadius:4,color:'#fff',cursor:'pointer',marginTop:5,fontSize:14}}>CHAT WITH US</div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I exchange/return my products?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <div style={{fontSize:15,color:'#746f6f'}}> We're sorry that you are not happy with the product(s).
           We'll try our best to resolve your query immediately.</div>
           <div style={{background:'#51cbcc',width:98,padding:5,borderRadius:4,color:'#fff',cursor:'pointer',marginTop:5,fontSize:14}}>CHAT WITH US</div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>My refund has not been received</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{background:'#51cbcc',width:98,padding:5,borderRadius:4,color:'#fff',cursor:'pointer',fontSize:14}}>CHAT WITH US</div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Issue While placing an order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{background:'#51cbcc',width:98,padding:5,borderRadius:4,color:'#fff',cursor:'pointer',fontSize:14}}>CHAT WITH US</div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Other / Bulk Inquiry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{background:'#51cbcc',width:98,padding:5,borderRadius:4,color:'#fff',cursor:'pointer',fontSize:14}}>CHAT WITH US</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>:null}
           

       </Grid>
       


       </Grid>
        </div>
        </div>
    )
}