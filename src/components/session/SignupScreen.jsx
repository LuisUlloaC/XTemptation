import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import colors from '../../colors';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';


export default function SignPrimary() {
  let navigate = useNavigate();
  const { state, setState } = React.useContext(Context)
  const [wrongCredentials, setWrongCredentials] = React.useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') === 'admin' && data.get('password') === 'admin') {
      setState({ ...state, 'user': data.get('email'), 'isAdmin': true })
      navigate('/home')
    } else {
      setWrongCredentials(true)
    }
  };

  return (
    <div className="container" >
            <AuthLeftGrid />
            <div className="authRightGrid">
                <form className='formLayout' style={{height: '70%'}} action="#" >
                    <div className='tittle'>Sign up</div>
                    <div style={{display: 'flex', flexDirection: 'row', height: '12%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input'style={{width: '45%', height: '100%'}} type="text" placeholder="First Name*" />
                        <input className='input' style={{width: '45%', height: '100%'}} type="text" placeholder="Last Name*"  />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '40%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input' style={{height: '40%'}} type="text" placeholder="Email address*" />
                        <input className='input' style={{height: '40%'}} type="password" placeholder="Password*"  />
                        <input className='input' style={{height: '40%'}} type="password" placeholder="Repeat password*"  />
                    </div>
                    <input className='button' type="submit" value="Sign up" />
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Forgot password?</a>
                    <a className='link' href="/signin" >Already have an account? Sign in</a>
                </div>
                </form>
            </div>
        </div>
  );
}


const defaultTheme = createTheme({
  card: {
    display: 'flex',
    height: '100vh',
    width: '100cqw'
  },
  leftGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100cqw',
    height: '100vh',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    backgroundColor: colors.middle_dark_purple
  },
  rightGrid: {
    display: 'flex',
    height: '100vh',
    backgroundColor: colors.darker_purple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back_logo: {
    display: 'flex',
    position: 'abosolute',
    left: 5,
    bottom: 5,
    zIndex: -1
  }
});