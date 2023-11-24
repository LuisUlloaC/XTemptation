import * as React from 'react';
import '../styles/navBar.css';
import FeedIcon from '../../../assets/feedIcon';
import UserIcon from '../../../assets/userIcon';
import StreamIcon from '../../../assets/streamIcon';
import CameraIcon from '../../../assets/cameraIcon';
import NavbarBellIcon from '../../../assets/navBarBellIcon';
import UserBadgeIcon from '../../../assets/userBadge';
import MessageNavBarIcon from '../../../assets/messageNavBarIcon';



export default function NavBarMobile() {

  return (
      <div className='navigation-bar'>
          <div className='pubs'>
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
      <div className='userActions'>
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