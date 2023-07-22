import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { getData, postData, ServerURL } from "../../Services/NodeServices"
import { Button, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SignupDialog from './SignupDialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: '#fff',
    color:'#000',
    '&:hover': {
        backgroundColor: '#fff',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { 
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));


export default function SearchBar(props) {
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));  

    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' style={{ background: '#000' }}>

                <Toolbar>
                  {/*   <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                 <div style={{ fontSize: 26, width: '35%', fontWeight: 700,letterSpacing:5,fontFamily:'Montserrat',color:'#fff' }} >
                    <div style={{ width: '25%' }}>
                      
                    <img src={`${ServerURL}/images/tug.png`} style={{width:220,height:'auto'}} />
                                                   
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }}>
                    { matches?null:     <div>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>}
                    </div>
                    <div style={{ display: 'flex', width: '35%', justifyContent: 'right', textAlign: 'center', color: 'black', fontWeight: 600, textDecoration: "none", fontWeight: "bolder", cursor: 'pointer' }}>
                    <SignupDialog/>
                   </div>
                </Toolbar>
            </AppBar>
           

        </Box>
    );
}
