import React,{useState} from 'react'
import {AppBar,useMediaQuery,useTheme, Grid, Tabs,Tab, Toolbar, Typography, Box, Button} from "@mui/material"
import ShopIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';
const NavBar = ({links}) => {
    const [value, setValue] = useState(0)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
     
  return (
    
    <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(112,74,204,1) 14%, rgba(103,85,208,1) 36%, rgba(219,65,65,1) 70%, rgba(255,227,0,1) 100%);' }}>
        <Toolbar>
            {
                isMatch?
                <>
                    <Typography sx={{paddingTop:1.5}}><ShopIcon /></Typography>
                    <DrawerComp links={links} />
                </>:
                <Grid sx={{placeItems:'center'}} container>
                <Grid item xs={2}>
                    <Typography sx={{paddingTop:1.5}}><ShopIcon /></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Tabs  onChange={(e,val)=>setValue(val)} textColor='inherit' value={value}>
                        {links.map((item,index)=>(

                        <Tab key={index} label={item}/>
                        ))}
                        
                    </Tabs> 
                </Grid>
                <Grid  item xs={1}/>
                <Grid item xs={3}>
                    <Box display='flex'>
                        <Button sx={{marginLeft:'auto' ,background:'rgba(180,58,58,1)'}} variant='contained'>Login</Button>
                        <Button sx={{marginLeft:1,background:'rgba(180,58,58,1)'}} variant='contained'>Sign up</Button>
                    </Box>
                </Grid>
            </Grid>
            }
            
        </Toolbar>
    </AppBar>
    
  )
}

export default NavBar