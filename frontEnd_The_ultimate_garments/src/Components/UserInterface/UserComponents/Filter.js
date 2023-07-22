import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useStyles } from "./FilterCss";


export default function Filter(props) {
    var classes = useStyles()
    const [hideSize, setHideSize] = useState(true)
    const [hidePrice, setHidePrice] = useState(true)



    return (<div className={classes.container}>
        <div className={classes.box}>
            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <div className={classes.heading}>FILTER</div>
                </Grid>

                <Grid item xs={6}>
                    <div onClick={()=>setHideSize(!hideSize)}  className={classes.heading1}>SIZE</div>
                </Grid>

                <Grid item xs={6}>
                    <div onClick={()=>setHideSize(!hideSize)} className={classes.arrowIcon} ><KeyboardArrowDownIcon fontSize="large" /></div>
                </Grid>

                {hideSize?
                <Grid item xs={12}>
                    <div className={classes.heightline}>
                        S <br />M<br />L<br />XL<br />XXL
                    </div>
                </Grid>:null}

                <Grid item xs={6}>
                    <div onClick={()=>setHidePrice(!hidePrice)}  className={classes.heading1}>PRICE</div>
                </Grid>
                
                <Grid item xs={6}>
                    <div onClick={()=>setHidePrice(!hidePrice)} className={classes.arrowIcon} ><KeyboardArrowDownIcon fontSize="large" /></div>
                </Grid>

                {hidePrice?
                <Grid item xs={12}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="lowtohigh" control={<Radio />} label="PRICE:Low to High" />
                            <FormControlLabel value="hightolow" control={<Radio />} label="PRICE:High to Low" />
                        </RadioGroup>
                    </FormControl>
                </Grid>:null}

            </Grid>



        </div>
    </div>)
}

