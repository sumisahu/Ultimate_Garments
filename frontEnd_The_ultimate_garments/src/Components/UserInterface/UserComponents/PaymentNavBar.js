import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ServerURL } from "../../Services/NodeServices"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PaymentNavBar(props){
  var theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));  

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: '#FFF' }}>
          <Toolbar>
          { matches?null:  <div style={{fontSize: 28,  fontWeight: 700,letterSpacing:5,fontFamily:'Montserrat',color:'#000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%',background:'#fff',textAlign:'center' }}> 
          <img src={`${ServerURL}/images/tu.png`} style={{width:220,height:'auto'}} />
          </div>}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%',right:0,color:'#000',background:'#fff',textAlign:'center' }}>
            <div style={{background:'#f2f2f2',fontSize:23,fontFamily:'sans-serif',fontWeight:550, display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center'}}> 
            <img src={`${ServerURL}/images/securityicon.png`} style={{width:'12%',height:'auto'}} />100% SECURE PAYMENT
          </div>
          </div>
          </Toolbar>
        </AppBar>
  
      </Box>
    )
}