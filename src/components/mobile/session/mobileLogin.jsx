import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/provider';
import ErrorAlert from '../../utils/errorAlert';
import { userLogin } from '../../../actions/auth';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MobileLogin() {
  const { state, setState, api } = React.useContext(Context)
  let navigate = useNavigate();

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
      }
    })()

  };


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
        console.log(values)
      }}

      style={{
        display: 'flex', width: '80%', height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}

    >
      {({ errors, touched }) => (
        <Form style={{
          display: 'flex', width: '80%', height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Field className='card-input' name="email" />
            {errors.email && touched.email && <ErrorAlert errorBody={errors.email} />}
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Field className='card-input' name="password" />
            {errors.password && touched.password && <ErrorAlert errorBody={errors.password} />}
          </div>
          <IconButton type="submit" style={{ display: 'flex' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Form>
      )}
    </Formik>
  );
}
