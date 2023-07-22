import React, { useEffect, useState } from "react"
import { ServerURL } from "../../Services/NodeServices"
export default function SmallCardComponent(props) {


      return props.data.map((item) => {

            return (
                  <div style={{ padding: 2, margin: 3, position: 'relative', width: 300, height: 370, cursor: 'pointer', }}>
                        <img title={item.subcategoryname} src={`${ServerURL}/images/${item.picture}`} style={{ width: '100%', height: '100%' }} />
                        <div style={{ fontFamily: '#FFFFFF', fontWeight: 'bold', fontSize: 20, position: 'absolute', top: '90%', textAlign: 'center', width: 300, color: '#FFF', zIndex: 1, }}>{item.productname}</div>
                  </div>
         
            )
      })



}