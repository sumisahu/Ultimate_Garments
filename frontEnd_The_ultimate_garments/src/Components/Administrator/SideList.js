import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradientIcon from "@mui/icons-material/Gradient";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { Link } from "react-router-dom";
import FilterIcon from '@mui/icons-material/Filter';
import { List, ListItem } from '@mui/material';





export const ListItems = (
  <React.Fragment>

    <ListSubheader component="div" inset>
        Items
    </ListSubheader>


    <ListItemButton component={Link} to="/dashboard/displayallcategory" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItemButton>


    <ListItemButton component={Link} to="/dashboard/displayallsubcategory" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Sub-Category" />
    </ListItemButton>


    <ListItemButton component={Link} to="/dashboard/displayallproducts" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <CheckroomIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>


    <ListItemButton component={Link} to="/dashboard/displayallsize" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <LineWeightIcon />
      </ListItemIcon>
      <ListItemText primary="Size" />
    </ListItemButton>


    <ListItemButton component={Link} to="/dashboard/displayallcolor" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <GradientIcon />
      </ListItemIcon>
      <ListItemText primary="Color" />
    </ListItemButton>



    <ListSubheader component="div" inset>
       Images
    </ListSubheader>

    <ListItemButton component={Link} to="/dashboard/bannerimages" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <FilterIcon />
      </ListItemIcon>
      <ListItemText primary="Banner" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/productpicture" style={{ color: 'black', textDecoration: 'none' }}>
      <ListItemIcon>
      <FilterIcon />
      </ListItemIcon>
      <ListItemText primary="Product" />
    </ListItemButton>

   
  </React.Fragment>
);