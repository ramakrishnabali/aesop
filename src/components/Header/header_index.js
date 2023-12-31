import { AppBar, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
// import { Tabs } from "react-bootstrap";


const Header =()=> {

    return (
        <div style={{width:"100%"}}>
        <AppBar sx={{backgroundColor:"lightgray",color:"black",p:"15px",maxWidth:"100vw"}}>
            <Toolbar>
                {/* <Tabs sx={{marginRight:"auto"}}>
                <Tab label="SkinCare"  />
                <Tab label=" Body&Hand" />
                <Tab label=" Hair" />
                <Tab label=" Fragrance" />
                <Tab label=" Home" />
                <Tab label="Kits&Travel" />
                <Tab label="Gifts" />
                <Tab label="Read" />
                <Tab label=" Stores" />
                <Tab label=" Facial Appointments" />  
                </Tabs> */}
                <Typography   sx={{marginLeft:"20px",cursor:"pointer"}}> 
                    SkinCare
               </Typography>
                <Typography   sx={{marginLeft:"20px",cursor:"pointer"}}> 
                    Body&Hand
               </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Hair
                    </Typography>
                <Typography sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Fragrance
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Home
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Kits&Travel
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Gifts
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Read
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Stores
                    </Typography>
                <Typography  sx={{marginLeft:"20px",cursor:"pointer"}}>
                    Facial Appointments 
                    </Typography>
                
                <SearchIcon  sx={{marginLeft:"15px",color:"black"}}/>
                <Typography variant="contained" sx={{ backgroundColor: 'transparent', color: 'black',marginLeft:"auto",cursor:"pointer" }}>Login</Typography>
                <Typography variant="contained" sx={{ backgroundColor: 'transparent', color: 'black',marginLeft:"25px",cursor:"pointer" }}>Cabinet</Typography>
                <Typography variant="contained" sx={{ backgroundColor: 'transparent', color: 'black',marginLeft:"25px",cursor:"pointer" }}>Cart</Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header