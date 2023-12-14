import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/provider';
import ErrorAlert from '../../utils/errorAlert';
import { userLogin } from '../../../actions/auth';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import colors from '../../../colors';
import TemptationsLogo from '../../../assets/news/temptationsLogo';

export default function DesktopLogin() {
  const { state, setState, api } = React.useContext(Context)
  let navigate = useNavigate();

  React.useEffect(() => {
    if (state.access) {
      navigate("/home");
    }
  })

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email requerido'),
    password: Yup.string().required('Password requerido')
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        let response = await userLogin(api, values.email, values.password)
        if (response.sucess) {
          setState(response.state_data)
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
              alignItems: 'center', justifyContent: 'space-evenly'

            }}>
              <TemptationsLogo />
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
            <a href='/signup'>Sign Up</a>
            <a href='/forgotpassword'>Forgot Password</a>
          </div>
        </Form>
      )}
    </Formik>
  );
}
