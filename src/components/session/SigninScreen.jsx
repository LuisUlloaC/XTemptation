import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FaceboockLogin from '../../assets/facebook';
import GoogleLogin from '../../assets/google';
import AppleLogin from '../../assets/apple';


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
                    <div className='title'>
                      <span>Bem vindo de novo</span>
                      <div className='subtitle'>
                      <span>Iniciar sessão</span>
                      </div>
                    </div>
                    <div className='inputBox'>
                        <div className='input-container'>
                        <MailOutlineOutlinedIcon className='icon-class-name'/>
                        <input className='input' type="text" placeholder="Email address*" />
                        </div>
                        <div className='input-container'>
                        <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' type="password" placeholder="Password*"  />
                        </div>
                    </div>
                    <input className='button' type="submit" value="Iniciar sessão" />
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Esqueceu sua senha</a>
                    <a className='link' href="/signup" >Registre-se no X-Temptation</a>
                    <div className='banners'>
                      <FaceboockLogin/>
                      <GoogleLogin/>
                      <AppleLogin/>
                    </div>
                </div>
                </form>
            </div>
        </div>
  );
}

