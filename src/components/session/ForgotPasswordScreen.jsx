import * as React from 'react';
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
                <form className='formLayout' action="#" >
                    <div className='tittle'><span>Insert email to send restart code</span></div>
                    <div className='inputBox'>
                        <input className='input' type="text" placeholder="Email address*" />
                    </div>
                    <input className='button' type="submit" value="Send code" />
                <div className="footer">
                    <a className='link' href="/signin" >Back to login</a>
                </div>
                </form>
            </div>
        </div>
  );
}