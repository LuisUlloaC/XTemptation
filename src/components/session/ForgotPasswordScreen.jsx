import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';
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
                <form className='formLayout' action="#" style={{maxHeight: '30%', minHeight: '30%'}}>
                    <div className='title'><span>Insert email to send restart code</span></div>
                    <div className='inputBox'>
                      <div className='input-container' style={{height: '40%'}}>
                      <MailOutlineOutlinedIcon className='icon-class-name'/>
                        <input className='input' type="text" placeholder="Email address*" />

                      </div>
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