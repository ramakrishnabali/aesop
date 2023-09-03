import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Toolbar, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const anchor = "right"

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event)
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
    
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "0px" }}
      sx={{overflow:"auto", paddingRight:"0px", width:anchor === "right" ? "100vw":"0px"}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItem sx={{maxWidth:"100%",p:"20px"}}>
            <ListItemText primary = {"Aesop"} />
            <ListItemIcon>
              <SearchIcon sx={{marginLeft:"auto"}}/>
              <FavoriteBorderIcon sx={{marginLeft:"20px"}}/>
              <ListItemText sx={{marginLeft:"20px"}} primary = {"Cart"} />
            </ListItemIcon>
            <CloseIcon sx={{marginLeft:"20px"}}
             onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
              />
        </ListItem>
        {[' SkinCare', ' Body&Hand', ' Hair', 'Fragrance',' Home'].map((text, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={text} />
              <ListItemIcon>
               <KeyboardArrowRightIcon sx={{marginLeft:"auto"}}/>
              </ListItemIcon>
              <Divider />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Kits&Travel', 'Gifts'," Read","Stores","Facial Appointments"].map((text, index) => (
           <ListItem key={index}>
           <ListItemButton>
             <ListItemText primary={text} />
             <ListItemIcon>
              <KeyboardArrowRightIcon sx={{marginLeft:"auto"}}/>
             </ListItemIcon>
             <Divider />
           </ListItemButton>
         </ListItem>
        ))}
      </List>
  
    </Box>
    </>
  );

  return (

            <AppBar  sx={{backgroundColor:"lightgray",color:"black",p:"0px",maxWidth:"100vw",left:"0px"}}>
                <Toolbar>
                    <Typography>
                        Aesop
                    </Typography>
                    <SearchIcon  sx={{color:"black" , marginLeft:"auto"}}/>
                    <FavoriteBorderIcon sx={{marginLeft:"15px",color:"black"}}/>
                    <Typography sx={{marginLeft:"15px",color:"black"}}>
                        Cart
                    </Typography>
                    <Button onClick={toggleDrawer(anchor, true)} sx={{color:"black"}}><DragHandleIcon/></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        sx={{paddingRight:"0px",overflow:"auto"}}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
  );
}