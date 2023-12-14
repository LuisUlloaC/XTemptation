import * as React from 'react';
import { Context } from '../context/provider';
import MobileSignUp from '../mobile/session/mobileSignUp';
import DesktopSignUp from '../desktop/session/desktopSignUp';


const SignUp = () => {
  const { state } = React.useContext(Context);

  return (
    <>
    {state.deviceOS === 'windows' ? 
    
    <DesktopSignUp/>
  : <MobileSignUp/>
  }
    </>
  );
}

export default SignUp;