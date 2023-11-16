import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
import FaceboockLogin from '../../assets/facebook';
import GoogleLogin from '../../assets/google';
import AppleLogin from '../../assets/apple';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


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
                <form className='formLayout' action="#" >
                    <div className='title'>Sign up</div>
                    <div className='inputBox' >
                    <div className='input-container' style={{height: '40%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input'style={{width: '40%', height: '50%', marginBottom: '2%'}} type="text" placeholder="First Name*" />
                        <input className='input' style={{width: '40%', height: '50%', marginBottom: '2%'}} type="text" placeholder="Last Name*"  />
                    </div>
                    <div className='input-container'  style={{height: '40%',width: '100%'}}>
                    <MailOutlineOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%',height: '50%', marginBottom: '2%'}} type="text" placeholder="Email address*" />
                    </div>
                    <div className='input-container' style={{height: '40%',width: '100%'}}>
                    <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%', height: '50%', marginBottom: '2%'}} type="password" placeholder="Password*"  />
                    </div>
                    <div className='input-container' style={{height: '40%',width: '100%'}}>
                    <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%', height: '50%', marginBottom: '2%'}} type="password" placeholder="Repeat password*"  />
                    </div>
                    </div>
                    <input className='button' type="submit" value="Sign up" />
                <div className="footer" >
                    <a className='link' href="/forgotPassword" >Esqueceu sua senha</a>
                    <a className='link' href="/signin" >já tem uma conta? Entrar</a>
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