import * as React from 'react';
import ChatIcon from '../../assets/chatIcon';
import FeedIcon from '../../assets/feedIcon';
import UserIcon from '../../assets/userIcon';
import StreamIcon from '../../assets/streamIcon';
import CameraIcon from '../../assets/cameraIcon';
import NavbarBellIcon from '../../assets/navBarBellIcon';
import UserBadgeIcon from '../../assets/userBadge';
import MessageNavBarIcon from '../../assets/messageNavBarIcon';



export default function NavBar() {

  return (
      <div style={{
          display: 'flex', position: 'absolute', top: '0',left: '15%',width: '85vw',
          borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', backgroundColor: '#fff',
          alignItems: 'center', border: '1px solid #580957',  boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)'
      }}>
          <div style={{
              display: 'flex', minWidth: '80%', flexDirection: 'row',
               alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#fff', borderRight: '1px solid #580957', 
          }}>
        <div>
          <FeedIcon />
        </div>
        <div>
          <CameraIcon/>
        </div>
        <div>
          <StreamIcon/>
        </div>
        <div>
          <UserIcon/>
        </div>
      </div>
      <div style={{display: 'flex', width: '100%',justifyContent: 'space-evenly'}}>

      <div>
      <NavbarBellIcon/>
      </div>
      <div>
      <MessageNavBarIcon/>
      </div>
      <div>
      <UserBadgeIcon/>
      </div>
      </div>
    </div>
  );
}