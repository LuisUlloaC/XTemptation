import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DesktopForgotPassword from './desktopForgotPassword';
import MobileForgotPassword from '../mobile/session/mobileForgotPassword';



export default function SignPrimary() {
  let navigate = useNavigate();
  const { state, setState } = React.useContext(Context)


  return (
    <>
      {state.deviceOS === 'windows' ?
        <DesktopForgotPassword /> : <MobileForgotPassword />
      }
    </>
  );
}