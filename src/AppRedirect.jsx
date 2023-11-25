import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from './components/context/provider';

export default function AppRedirectComponent() {
  const { setState } = React.useContext(Context)
  let userAgent = window.navigator.userAgent.split('/')
  let match = String(userAgent).match(/\((.*?)\)/);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (match[1].includes('Windows')) {
      setState(oldState => ({
        ...oldState,
        deviceOS: 'windows'
    }))
    } else {
      setState(oldState => ({
        ...oldState,
        deviceOS: 'other'
    }))
    }
    return navigate('/signin')
  })
}


