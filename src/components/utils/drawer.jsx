import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import colors from '../../colors';



export default function MiniDrawer() {

  return (
    <div className='drawer'>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PermMediaOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AddCardOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MoreHorizOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
    </div>
  );
}