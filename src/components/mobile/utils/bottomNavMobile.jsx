import * as React from 'react';
import '../styles/drawer.css';
import PlusButton from '../../../assets/news/olusButton';
import HouseIcon from '../../../assets/news/houseIcon';
import UserIcon from '../../../assets/news/newUserIcon';
import RoundedChatIcon from '../../../assets/news/roundedChatIcon';
import RoundedBellIcon from '../../../assets/news/roundedBellIcon';



export default function BottomDrawer() {

  return (
    <div className='mobile-drawer'>
      <div className='list'>
        <div className='item'>
          <HouseIcon/>
        </div>
        <div className='item'>
          <UserIcon/>
        </div>
        <div className='item'>
          <PlusButton/>
        </div>
        <div className='item'>
          <RoundedChatIcon/>
        </div>
        <div className='item'>
          <RoundedBellIcon/>
        </div>
      </div>
    </div>
  );
}