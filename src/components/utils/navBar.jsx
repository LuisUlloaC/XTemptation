import * as React from 'react';
import HomeIcon from '../../assets/homeIcon';
import BellIcon from '../../assets/bellIcon';
import ChatIcon from '../../assets/chatIcon';
import FolderIcon from '../../assets/folderIcon';



export default function NavBar() {

  return (
      <div style={{
          display: 'flex', position: 'fixed', top: '0', width: '50vw',
          borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', backgroundColor: 'aqua',
          alignItems: 'center', justifyContent: 'center'
      }}>
          <div style={{
              display: 'flex', minWidth: '40vw', flexDirection: 'row',
              backgroundColor: 'aquamarine', alignItems: 'center', justifyContent: 'center'
          }}>
        <div>
          <HomeIcon/>
        </div>
        <div>
          <BellIcon/>
        </div>
        <div>
          <ChatIcon/>
        </div>
        <div>
          <FolderIcon/>
        </div>
      </div>
    </div>
  );
}