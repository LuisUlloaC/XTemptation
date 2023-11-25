import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
import FaceboockLogin from '../../assets/facebook';
import GoogleLogin from '../../assets/google';
import AppleLogin from '../../assets/apple';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { userSignUp } from '../../actions/auth';
import MobileSignUp from '../mobile/session/mobileSignUp';
import DesktopSignUp from './desktopSignUp';


const SignUp = () => {
  let navigate = useNavigate();
  const {  state, setState, api } = React.useContext(Context)
  const [ setWrongCredentials] = React.useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    (async () => {
    const response = await userSignUp(
      api,
      data.get('name_user'),
      data.get('email'),
      data.get('password'),
    )
    if (response.sucess) {
      setState(response.state_data)
      navigate("/home");
    } else {
      setWrongCredentials(true);
    }
    })()

  };

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