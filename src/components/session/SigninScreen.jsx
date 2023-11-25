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
import DesktopLogin from './desktopLogin';


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
      {state.deviceOS === 'windows' ?
        <DesktopLogin />
        : <MobileLogin />
      }
    </>
  );
}

