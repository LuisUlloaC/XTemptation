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


const SignUp = () => {
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
                <div className='formLayout' action="#" >
                    <div className='title'>
                      <span>Bem vindo</span>
                      <div className='subtitle'>
                      <span>Inscreva-se para começar</span>
                      </div>
                    </div>
                    <form className='inputBox' style={{height: '40%'}}>
                    <div className='input-container' style={{height: '20%',width: '100%'}}>
                        <PermIdentityOutlinedIcon className='icon-class-name'/>
                        <input className='input'style={{width: '93%', height: '50%', marginBottom: '2%'}} type="text" placeholder="Username*" />
                    </div>
                    <div className='input-container'  style={{height: '20%',width: '100%'}}>
                    <MailOutlineOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%',height: '50%', marginBottom: '2%'}} type="text" placeholder="Email address*" />
                    </div>
                    <div className='input-container' style={{height: '20%',width: '100%'}}>
                    <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%', height: '50%', marginBottom: '2%'}} type="password" placeholder="Password*"  />
                    </div>
                    <div className='input-container' style={{height: '20%',width: '100%'}}>
                    <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' style={{width: '93%', height: '50%', marginBottom: '2%'}} type="password" placeholder="Repeat password*"  />
                    </div>
                    <input className='button' style={{minHeight: '20%'}} type="submit" value="Sign up" />
                    </form>
                <div className="footer" >
                    <p style={{color: 'gray', height: '40%', width: '60%', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center'}}>
                      Ao se inscrever, você concorda com nossos <a style={{color: 'blue'}}  href="/forgotPassword">Termos de Serviço e Política de Privacidade </a> 
                      e confirma que tem pelo menos 18 anos de idade.
                    </p>
                    <p style={{color: 'gray'}}> Você já tem uma conta?<a style={{color: 'blue'}} href="/signin" >Iniciar sessão</a> </p>
                    <div className='banners'>
                      <FaceboockLogin/>
                      <GoogleLogin/>
                      <AppleLogin/>
                    </div>
                </div>
                </div>
            </div>
        </div>
  );
}

export default SignUp;