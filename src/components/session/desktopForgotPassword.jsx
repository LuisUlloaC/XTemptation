import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import ErrorAlert from '../utils/errorAlert';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import colors from '../../colors';
import TemptationsLogo from '../../assets/news/temptationsLogo';
import { userChangePassword, userSendRestorecode } from '../../actions/auth';

export default function DesktopForgotPassword() {
  const { state, api } = React.useContext(Context);
  const [sendedEmail, setSendedEmail] = React.useState(false);
  const [code, setCode] = React.useState('');
  let navigate = useNavigate();

  React.useEffect(() => {
    if (state.access) {
      navigate("/home");
    }
  })


  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email requerido'),
    code: Yup.string(),
    new_password: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        code: "",
        new_password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log('SENDED EMAIL', sendedEmail);
        console.log('CODE', values.code);
        console.log('CODE LENGTH', values.code);
        console.log('PSW', values.new_password);
        if(values.code){
          setCode(values.code)
        }
        if(!sendedEmail){
          setSendedEmail((await userSendRestorecode(api, values.email)).sucess);
        }else if(code && values.new_password){
          console.log('llegue aqui');
          await userChangePassword(api, values.email, values.code, values.new_password);
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
              {!sendedEmail ? 
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
              </div> : null
              }
              {sendedEmail && !code ?
              <div style={{ display: 'flex', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <Field name="code" placeholder='codehere'  style={{
                  display: 'flex',
                  width: '80%', height: '60%',
                  borderRadius: 12,
                  margin: '2%',
                  outline: 'none',
                  textAlign: 'center'
                }} />
                {errors.code && touched.code && <ErrorAlert errorBody={errors.code} />}
              </div> : null
              }
              {code ? 
              <div style={{ display: 'flex', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <Field name="new_password" placeholder="newpsw" type="password" style={{
                  display: 'flex',
                  width: '80%', height: '60%',
                  borderRadius: 12,
                  margin: '2%',
                  outline: 'none',
                  textAlign: 'center'
                }} />
                {errors.new_password && touched.new_password && <ErrorAlert errorBody={errors.new_password} />}
              </div>  : null
            }
              <IconButton type="submit" style={{ display: 'flex', backgroundColor: colors.light_purple, color: colors.white }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
            <a href='/signup'>Sign Up</a>
            <a href='/signIn'>Sign In</a>
          </div>
        </Form>
      )}
    </Formik>
  );
}
