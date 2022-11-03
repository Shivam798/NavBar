import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React ,{useState}from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import icon from './../Images/arrow.gif'
const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(false)
    const handleDrawer =()=>{
        setOpen(!open)
    }
    return (
    <>
    <Drawer PaperProps={{sx:{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,159,244,1) 100%)'}}} open={open} onClose={()=>setOpen(false)}>
        <List>
            {links.map((item,index)=>(

            <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
                <ListItemIcon>
                    
                    <img src={icon}  width='25' height='25' alt='arrow'></img>
                    
                    
                </ListItemIcon>
                <ListItemText sx={{color:'white'}}>
                 {item}   
                </ListItemText>
            </ListItemButton>
            ))}
        </List>
    </Drawer>
    <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={handleDrawer}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComp