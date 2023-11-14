import * as React from 'react';
import List from '@mui/material/List';
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



export default function MiniDrawer() {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='drawer'>
      <ul className='list'>
        <li className='item' href='/signin'>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <PermMediaOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <AddCardOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
        <li className='item'>
          <ListItemButton>
            <ListItemIcon>
              <MoreHorizOutlinedIcon sx={{ color: colors.white }} />
            </ListItemIcon>
          </ListItemButton>
        </li>
      </ul>
    </div>
  );
}