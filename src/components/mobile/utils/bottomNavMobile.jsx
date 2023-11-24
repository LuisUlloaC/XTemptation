import * as React from 'react';
import '../styles/drawer.css';
import HomeIcon from '../../../assets/homeIcon';
import BellIcon from '../../../assets/bellIcon';
import ChatIcon from '../../../assets/chatIcon';
import FolderIcon from '../../../assets/folderIcon';
import CreditCard from '../../../assets/creditCArd';
import PerfilIcon from '../../../assets/perfilIcon';
import ConfigIcon from '../../../assets/configIcon';



export default function BottomDrawer() {

  return (
    <div className='mobile-drawer'>
      <div className='list'>
        <div className='item'>
          <BellIcon/>
        </div>
        <div className='item'>
          <FolderIcon/>
        </div>
        <div className='item'>
          <HomeIcon/>
        </div>
        <div className='item'>
          <CreditCard/>
        </div>
        <div className='item'>
          <ConfigIcon/>
        </div>
      </div>
    </div>
  );
}