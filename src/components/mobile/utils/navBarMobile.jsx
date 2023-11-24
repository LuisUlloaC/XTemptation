import * as React from 'react';
import '../styles/navBar.css';
import TemptationsLogo from '../../../assets/news/temptationsLogo';
import FindIcon from '../../../assets/news/findLogo';
import OptionsIcon from '../../../assets/news/optionsIcon';



export default function NavBarMobile() {

  return (
    <div className='navigation-bar'>
      <div className='pubs'>
        <TemptationsLogo/>
      </div>
      <div className='userActions'>
        <div>
          <FindIcon />
        </div>
        <div>
          <OptionsIcon />
        </div>
      </div>
    </div>
  );
}