import React, { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function FaqComponent(props){
return(
    <div>
      <div style={{background:'#fff',marginTop:20}}>
        <a href='http://localhost:3000/home' style={{textDecoration:'none',color:'#000'}} ><HomeIcon fontSize="medium"/> </a> <ArrowForwardIosIcon fontSize="small"/> <span style={{textAlign:'center',position:'relative',bottom:4,fontSize:13,fontWeight:500}}>  FAQ's</span>
        </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontSize:30,fontWeight:600,letterSpacing:1,fontFamily:'sans-serif',marginTop:20 }}>
                    The Ultimate Garments
         </div> 

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         What are the payment options I can use?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         We provide you with various payment options like cash on delivery, debit/credit card payments, UPI payments and wallet
          payments as well.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         What is the return & refund policy?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         We provide 15 days, no questions asked, return and refund policy. The return pickup is processed within 2-3 working days. In case
          of cash on delivery order, you will have to share your bank account details through an email on care@Tug.com or send
           the details on 912222222222 (customer service number) on whatsapp or sms for the refund.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         How do I track my shipment?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         After the order is dispatched you’ll automatically receive the tracking link on your registered number. If for
          any reason you’re not able to get the status please email us on care@Tug.com or message us on any social media platform 
          and we’ll be happy to help.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         How do I cancel my order?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         You can either mail us at care@Tug.com or message us on any social media platform with the order id details and we will
          cancel the order on your behalf or you can even cancel it in my orders section on the website.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         Is it safe to provide the bank details for COD refund?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Yes, it is absolutely safe. Bank details include account number, IFSC code and the account holder name only, which is 
         mandatory for any bank transaction. We do not ask any other confidential details.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         How can I check if the pin code of my city is deliverable or not?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         Usually we provide delivery all over India, hence mostly all the pin codes are deliverable. Even then if you wish to check, you 
         can mail us on care@Tug.com and we will provide you with the required details.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         I have created the return request. When will the product be picked up?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         It usually takes 2-3 working days for the courier partner to pick the order, although pickup orders placed before 1pm can also be
          picked up on the same day itself.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         I have returned the garment, When will I receive the refund?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         It usually takes 5-7 working days for the refund to be processed.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         I have received incorrect/defective products?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         We are extremely sorry for the inconvenience. It is highly unfortunate that you have received a defective/incorrect garment.
          Rest assured we take utmost care at our warehouse and maintain high quality standards. Please help us with your order id and 
          our executive will shortly call you and create a return pickup of the defective/incorrect garment. Once again we apologise for
           the inconvenience.
         </div>

         <div style={{marginTop:20,fontSize:18,fontWeight:600,padding:5}}>
         I was given a coupon code when I returned/cancelled my last order. How can I redeem it?
         </div>
         <div style={{marginTop:3,fontSize:14,fontWeight:500,padding:5,}}>
         You can redeem your coupon code the next time you place an order. You just have to enter the coupon code while you checkout and 
         the coupon code amount will be reduced from the total bill. The validity of the coupon code is 60 days. The entire coupon amount
          needs to be used in a single usage. Balance will not be carried forward.
         </div>


         


    </div>
)

}