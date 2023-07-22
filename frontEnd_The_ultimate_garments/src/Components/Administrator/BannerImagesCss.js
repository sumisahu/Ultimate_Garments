import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    mainContainer: {
       
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        marginTop:'3%',
        width: '60%',
        height: '71%',
        background: '#fff',
        borderRadius: 5,
        boxShadow:' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px '
    },
    headingText: {
        fontFamily:'Merriweather Sans',
        width:'80%',
        fontSize: 48,
        fontWeight: 700,
        padding: 2,
        margin: 3,
        color: '#01579b'
    },
    gridStyle: {
        padding: 10,

    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

});
