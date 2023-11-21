import * as React from 'react';
import HomeIcon from '../../assets/homeIcon';
import BellIcon from '../../assets/bellIcon';
import ChatIcon from '../../assets/chatIcon';
import FolderIcon from '../../assets/folderIcon';
import CreditCard from '../../assets/creditCArd';
import PerfilIcon from '../../assets/perfilIcon';
import ConfigIcon from '../../assets/configIcon';



export default function MiniDrawer() {

  return (
    <div className='drawer'>
      <div className='list'>
        <div className='item'>
          <HomeIcon/>
          <span>Comenzar</span>
        </div>
        <div className='item'>
          <BellIcon/>
          <span>Notificacion</span>
        </div>
        <div className='item'>
          <ChatIcon/>
          <span>Message</span>
        </div>
        <div className='item'>
          <FolderIcon/>
          <span>Collecciones</span>
        </div>
        <div className='item'>
          <CreditCard/>
          <span>Card</span>
        </div>
        <div className='item'>
          <PerfilIcon/>
          <span>Profile</span>
        </div>
        <div className='item'>
          <ConfigIcon/>
          <span>Config</span>
        </div>
      </div>
    </div>
  );
}