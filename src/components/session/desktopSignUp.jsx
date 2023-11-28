import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import ErrorAlert from '../utils/errorAlert';
import { userSignUp } from '../../actions/auth';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import colors from '../../colors';
import TemptationsLogo from '../../assets/news/temptationsLogo';

export default function MobileSignUp() {
  const { state, setState, api } = React.useContext(Context)
  let navigate = useNavigate();

  React.useEffect(() => {
    if (state.access) {
      navigate("/home");
    }
  })


  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Username required'),
    email: Yup.string().email().required('Email required'),
    password: Yup.string().required('Password required')
  });

  return (
    <Formik
      initialValues={{
        user_name: "",
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        let response = await userSignUp(api,values.user_name, values.email, values.password)
        if (response.sucess) {
          setState(response.result)
          navigate("/");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form
          style={{
            display: 'flex', width: '100vw', height: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column',
            height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              width: '40%', height: '40%',
              alignItems: 'center', justifyContent: 'center'

            }}>
              <TemptationsLogo />
              <div style={{ display: 'flex', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <PermIdentityOutlinedIcon style={{ display: 'flez', position: 'absolute', left: '35%' }}/>
                <Field name="user_name"  style={{
                  display: 'flex',
                  width: '80%', height: '60%',
                  borderRadius: 12,
                  margin: '2%',
                  outline: 'none',
                  textAlign: 'center'
                }} />
                {errors.user_name && touched.user_name && <ErrorAlert errorBody={errors.user_name} />}
              </div>
              <div style={{ display: 'flex', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <MailOutlineOutlinedIcon style={{ display: 'flez', position: 'absolute', left: '35%' }} />
                <Field name="email" type="email" style={{
                  display: 'flex',
                  width: '80%', height: '60%',
                  borderRadius: 12,
                  margin: '2%',
                  outline: 'none',
                  textAlign: 'center'
                }} />
                {errors.email && touched.email && <ErrorAlert errorBody={errors.email} />}
              </div>
              <div style={{ display: 'flex', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <LockOutlinedIcon style={{ display: 'flez', position: 'absolute', left: '35%' }} />
                <Field name="password" type="password" style={{
                  display: 'flex', width: '80%',
                  height: '60%', borderRadius: 12, margin: '2%', outline: 'none', textAlign: 'center'
                }} />
                {errors.password && touched.password && <ErrorAlert errorBody={errors.password} />}
              </div>
              <IconButton type="submit" style={{ display: 'flex', backgroundColor: colors.light_purple, color: colors.white }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
            <div style={{display:'flex', flexDirection: 'column', width:'100%', justifyContent: 'center', alignItems: 'center'}} >
                    <p style={{color: 'gray', height: '40%', width: '80%', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center'}}>
                      Ao se inscrever, você concorda com nossos <a style={{color: 'blue'}}  href="/forgotPassword">Termos de Serviço e Política de Privacidade </a> 
                      e confirma que tem pelo menos 18 anos de idade.
                    </p>
                    <p style={{color: 'gray'}}> Você já tem uma conta?<a href='/' style={{color: 'blue'}}>Iniciar sessão</a> </p>
                    
                </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
