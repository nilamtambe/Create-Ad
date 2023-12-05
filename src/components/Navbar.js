import React, { useState } from 'react';
import {AppBar,Toolbar,Typography,Tabs,Tab, Box,IconButton,Menu,MenuList,MenuItem, ListItem,List, ListItemButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";




function Navbar () {

  const [value, setValue]= useState(0);
  const [open, setOpen] = useState(false);

 



  return (
  <>
  
  <AppBar position='static' color='inherit'>
     <Toolbar> 
        <Typography fontSize={17} component="div" margin={1.5} fontWeight={550} sx={{flexGrow:1,display:{xs:"none",md:"flex"}}}>
          APP LOGO
        </Typography>
      
         <Tabs  indicatorColor='none'   value={value} onChange={(e,val)=>setValue(val)}  sx={{display:{xs:"none",md:"flex"}}}>
         
           <Link to='/' style={{ textDecoration: 'none' }}>
              <Tab label="DASHBOARD"  style={{color:"black"}}/> 
             </Link>
           <Link to='/ads' style={{ textDecoration: 'none' }}>
               <Tab label="CREATE ADS"   style={{color:"black"}}/>  
           </Link>
             
         </Tabs>

       <Box sx={{display:{xs:"flex",md:"none",marginLeft:"auto"}}} >
         <IconButton   size="large"  color="inherit" onClick={()=>setOpen(!open)} >
          <MenuIcon />
         </IconButton>
       </Box>

       <Menu open={open} onClose={()=>setOpen(false)} sx={{display:{xs:"flex",md:"none"}}}>
        <MenuList onClick={()=>setOpen(false)} divider>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <MenuItem label="DASHBOARD" style={{color:"black"}}>DASHBOARD
            </MenuItem>
          </Link>
          <Link to="/ads" style={{ textDecoration: 'none' }}>
            <MenuItem label="CREATE ADS" style={{color:"black"}}>CREATE ADS
           </MenuItem>
          </Link>
        
       </MenuList>
       </Menu>

       <Typography fontSize={17} component="div" margin={1.5} fontWeight={540} sx={{flexGrow:1,display:{xs:"flex",md:"none"}}}>
          APP LOGO
        </Typography>
      </Toolbar>
  </AppBar>

  <div>
    

  </div>

 
  </>
 
    
    
  )
}

export default Navbar;


