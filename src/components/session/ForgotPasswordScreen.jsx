import * as React from 'react';
import { Context } from '../context/provider';
import DesktopForgotPassword from '../desktop/session/desktopForgotPassword';
import MobileForgotPassword from '../mobile/session/mobileForgotPassword';



export default function SignPrimary() {
  const { state } = React.useContext(Context);

  return (
    <>
      {state.deviceOS === 'windows' ?
        <DesktopForgotPassword /> : <MobileForgotPassword />
      }
    </>
  );
}