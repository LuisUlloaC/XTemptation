import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
                <form className='formLayout' action="/home" >
                    <div className='tittle'>Sign in</div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '30%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input' type="text" placeholder="Email address*" />
                        <input className='input' type="password" placeholder="Password*"  />
                    </div>
                    <input className='button' type="submit" value="Sign in" />
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Forgot password?</a>
                    <a className='link' href="/signup" >Don't have an account? Sign up</a>
                </div>
                </form>
            </div>
        </div>
  );
}

