import * as React from 'react';
import { useNavigate } from "react-router-dom";

export default function AppRedirectComponent() {
    let userAgent = window.navigator.userAgent.split('/')
    let match = String(userAgent).match(/\((.*?)\)/);
    let navigate = useNavigate();

  React.useEffect(() => {
    if(match[1].includes('Windows')){
      return navigate('/signin')
    }else{
      return navigate('/m.home')
    }
  })
   }


