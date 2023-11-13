import * as React from 'react';
import List from '@mui/material/List';
import { mainListItems } from './listItemsDrawer';



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
      <ul>
        
        </ul>
        <List>
            {mainListItems}
        </List>
      </div>
  );
}