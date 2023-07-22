import React from "react";
import { useStyles } from "./HomeFooterCss";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function HomeFooter() {

  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div style={{ width: '100%' }}>
        <div className={classes.linkContainer}>
          <div className={classes.links}>
            <h3>COMPANY</h3>
            <a href='http://localhost:3000/aboutus' className={classes.aStyles}>About Us</a>
            <a href='http://localhost:3000/termandcondition' className={classes.aStyles}>Term and Condition</a>
            <a href='http://localhost:3000/privacypolicy' className={classes.aStyles}>Privacy Policy</a>
            <a href='http://localhost:3000/shippingpolicy' className={classes.aStyles}>Shipping Policy</a>
            
          </div>
          <div className={classes.links}>
            <h3>NEED HELP</h3>
            <a href='http://localhost:3000/faq' className={classes.aStyles}>FAQs</a>
           {/*  <a href='#' className={classes.aStyles}>Email Us</a> */}
            <a href='http://localhost:3000/returnrefundandcancellationpolicy' className={classes.aStyles}>Return, Refund and Cancellation Policy</a>
            <a href='http://localhost:3000/trackorder' className={classes.aStyles}>Track Order</a>
           {/*  <a href='#' className={classes.aStyles}>Carrer</a> */}
           {/*  <a href='#' className={classes.aStyles}>Site Map</a> */}
          </div>
          <div className={classes.links}>
            <h3>LOCATION</h3>
           <div style={{fontFamily:'Sans-serif',fontSize:13}}>13, behind Jhawar Estate Gulabchand Ki<br /> Bagichi, Nehru Colony, Mayur Nagar,<br /> Thatipur, Gwalior, Madhya Pradesh<br /> 474011<br /><br/></div>
            <div> <a href="#" className={classes.aStyles}> Sumit@gmail.com</a></div>
          </div>
          <div className={classes.links}>
            <h3>LETS BE FRIENDS</h3>
            <div className={classes.links2}>
              <a href='#' className={classes.iconStyles}> <FacebookIcon fontSize="large" /></a>
              <a href='https://instagram.com/hemnttt?igshid=ZDdkNTZiNTM=' className={classes.iconStyles}><InstagramIcon fontSize="large" /></a>
              <a href='#' className={classes.iconStyles}> <WhatsAppIcon fontSize="large" /></a>
              <a href='https://www.linkedin.com/in/hemant-singh-302492235/' className={classes.iconStyles}> <LinkedInIcon fontSize="large" /></a>
            </div>
          </div>
        </div>
        {/* <h5 className={classes.bottom}>Anywhere Fitness, a TT44 Company</h5> */}
      </div>
      <div style={{display:'flex',justifyContent:'center',textAlign:'center',padding:15}}>
      © 2022 All rights reserved. The Ultimate Garments Pvt Ltd.
      </div>
    </div>
  );
}

