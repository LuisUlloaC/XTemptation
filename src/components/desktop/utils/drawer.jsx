import * as React from 'react';
import TemptationsLogo from '../../../assets/news/temptationsLogo';
import HouseIcon from '../../../assets/news/houseIcon';
import RoundedBellIcon from '../../../assets/news/roundedBellIcon';
import RoundedChat from '../../../assets/news/roundedChatIcon';
import UserIcon from '../../../assets/news/newUserIcon';
import StonkIcon from '../../../assets/news/stonksIcon';
import PromoIcon from '../../../assets/news/promoIcon';
import ConfigIcon from '../../../assets/news/configIcon';
import HelpIcon from '../../../assets/news/helpIcon';

export default function MiniDrawer() {

  return (
    <div className='drawer'>
      <div className='list'>
        <div className='item'>
          <TemptationsLogo/>
        </div>
        <div className='item'>
          <HouseIcon/>
          <div style={{display: 'flex', width: '70%'}}>
          <span>Inicio</span>
          </div>
        </div>
        <div className='item'>
          <RoundedBellIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Notificaciones</span>
          </div>
        </div>
        <div className='item'>
          <RoundedChat/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Chat</span>
          </div>
        </div>
        <div className='item'>
          <UserIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Perfil</span>
          </div>
        </div>
        <div className='item'>
          <StonkIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Declaraciones</span>
          </div>
        </div>
        <div className='item'>
          <PromoIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Promociones</span>
          </div>
        </div>
        <div className='item'>
          <ConfigIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Configuracion</span>
          </div>
        </div>
        <div className='item'>
          <HelpIcon/>
          <div style={{display: 'flex', width: '70%', marginleft: '2%'}}>
          <span>Ayuda</span>
          </div>
        </div>
      </div>
    </div>
  );
}