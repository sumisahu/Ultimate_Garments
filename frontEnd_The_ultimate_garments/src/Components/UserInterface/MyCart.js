import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import MyCartProducts from "./UserComponents/MyCartProducts";
import CouponAndPriceDetail from "./UserComponents/CouponAndPriceDetail";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PaymentNavBar from "./UserComponents/PaymentNavBar";
import ShoppingSteps from "./UserComponents/ShoppingSteps";
import QualityAssuredLogo from "./UserComponents/QualityAssuredLogo";
import PaymentLogo from "./UserComponents/PaymentLogo";
import { useSelector } from "react-redux";


export default function MyCart(props) {
  var theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
 // var cart = useSelector((state) => state.cart);
 const [refresh,setRefresh]=useState(false)
  var cart=useSelector(state=>state.cart)
  var values=Object.values(cart)
  const updateCart=()=>{
   setRefresh(!refresh)
  }

  return (
    <div style={{ background: "#ecf0f1" }}>
      <PaymentNavBar />
      <ShoppingSteps />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            background: "#fff",
            marginTop: 40,
            boxShadow: "rgb(0 0 0 / 20%) 0px 1px 5px 0px",
            padding: 10,
          }}
        >
          <Grid container>
            {matches ? (
              <>
                {" "}
                <Grid item xs={12}>
                  <MyCartProducts value={values} updateCart={updateCart} />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6}>
                  <MyCartProducts  value={values} updateCart={updateCart} />
                </Grid>
              </>
            )}

            {matches ? (
              <>
                {" "}
                <Grid item xs={12}>
                  <CouponAndPriceDetail page={"Cart"} value={values} />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6}>
                  <CouponAndPriceDetail  page={"Cart"} value={values} />
                </Grid>
              </>
            )}
          </Grid>
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <QualityAssuredLogo />
      </div>
      <div style={{ marginTop: 60 }}>
        <PaymentLogo />
      </div>
    </div>
  );
}
