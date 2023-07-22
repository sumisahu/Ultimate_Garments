import React from 'react';
import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({

  container:{marginTop:9,
    width: '30%',
    height:'auto',
    background: '#fff',
    display:'flex',
    justifyContent:'center',
    
    
  },
  box:{
    marginTop: '8%',
    marginLeft:'35%',
  },

    heading:{
        fontFamily:'sans-serif',
        fontWeight:550,
        fontSize:25,
        lineHeight:'70px',
    },
    heading1:{
        fontFamily:'sans-serif',
        fontWeight:700 ,
        fontSize:16 ,
        cursor:'pointer'
         
    },
    heading2:{
        fontFamily:'sans-serif',
        fontWeight:400 ,
        fontSize:16 ,
         
    },
    heightline:{
        lineHeight:'25px',
        marginBottom:15,
        cursor:'pointer'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowIcon:{
        position:'relative',
        bottom:8 ,
        cursor:'pointer'
    }

})  