import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import colors from '../../colors';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Home" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Notifications" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChatBubbleOutlineOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Messages" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PermMediaOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Collections" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddCardOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Add card" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="Profile" sx={{ color: colors.white }}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MoreHorizOutlinedIcon sx={{ color: colors.white }}/>
      </ListItemIcon>
      <ListItemText primary="More" sx={{ color: colors.white }}/>
    </ListItemButton>
  </React.Fragment>
);
