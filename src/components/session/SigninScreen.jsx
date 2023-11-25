import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { userLogin } from '../../actions/auth';
import MobileLogin from '../mobile/session/mobileLogin';


export default function SignPrimary() {
  const { state, setState, api } = React.useContext(Context)
  let navigate = useNavigate();
  const [wrongCredentials, setWrongCredentials] = React.useState(false)

  React.useEffect(() => {
    if (state.access) { 
      navigate("/home");
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    (async () => {
    const response = await userLogin(
      api,
      data.get('email'),
      data.get('password'),
    )
    if (response.sucess) {
      setState(response.state_data)
      navigate("/");
    } else {
      setWrongCredentials(true);
    }
    })()

  };


  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email requerido'),
    password: Yup.string().required('Password requerido')
  });

  return (
    <>
    {state.deviceOS === 'windows'? 
    <div className="container" >
            <AuthLeftGrid />
            <div className="authRightGrid">
                <div className='formLayout' action="/home" >
                    <div className='title'>
                      <span>Bem vindo de novo</span>
                      <div className='subtitle'>
                      <span>Iniciar sessão</span>
                      </div>
                    </div>
                    <form className='inputBox' onSubmit={handleSubmit}>
                        <div className='input-container'>
                        <MailOutlineOutlinedIcon className='icon-class-name'/>
                        <input className='input' type="text" name='email' placeholder="Email address*" />
                        </div>
                        <div className='input-container'>
                        <LockOutlinedIcon className='icon-class-name'/>
                        <input className='input' type="password" name='password' placeholder="Password*"  />
                        </div>
                    <input className='button' type="submit" value="Iniciar sessão" />
                    </form>
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Esqueceu sua senha</a>
                    <a className='link' href="/signup" >Registre-se no X-Temptation</a>
                </div>
                </div>
            </div>
        </div>
        : <MobileLogin/>
  }
    </>
  );
}

