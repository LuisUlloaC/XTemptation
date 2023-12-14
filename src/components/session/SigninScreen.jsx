import * as React from 'react';
import { Context } from '../context/provider';
import MobileLogin from '../mobile/session/mobileLogin';
import DesktopLogin from '../desktop/session/desktopLogin';


export default function SignPrimary() {
  const { state } = React.useContext(Context)


  return (
    <>
      {state.deviceOS === 'windows' ?
        <DesktopLogin />
        : <MobileLogin />
      }
    </>
  );
}

