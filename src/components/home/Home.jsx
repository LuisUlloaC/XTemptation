import * as React from 'react';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import { getPublications } from '../../actions/pubs';
import HomeScreenMobile from '../mobile/homeMobile';
import HomeScreenDesktop from '../desktop/homeDesktop';


export default function HomeScreen() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const { state, api } = React.useContext(Context);
  const [publications, setPublications] = React.useState(false);

  React.useEffect(() => {
    if (!state.access) {
      navigate("/signin")
    }

    (async () => {
      let data = await getPublications(api);
      if (data.sucess) {
        setPublications(data.result);
        setLoading(false)
      }
    })()

  }, [loading, state.access, navigate, api]);

  return (
    <>
      {state.deviceOS === 'windows' ?
        <HomeScreenDesktop publications={publications} />
        :
        <HomeScreenMobile publications={publications}/>
      }
    </>

  );
}