import * as React from 'react';
import MiniDrawer from '../utils/drawer';
import FeedCard from '../utils/feedCard';
import StorieCard from '../utils/storiesCard';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import { getPublications } from '../../actions/pubs';
import HomeScreenMobile from '../mobile/homeMobile';


export default function HomeScreen() {
  const [loading, setLoading] = React.useState(true);
  const [currentScreen, setCurrentScreen] = React.useState('home');
  const navigate = useNavigate();

  const { state, setState, api } = React.useContext(Context);
  const [publications, setPublications] = React.useState(false);

  React.useEffect(() => {
    if (!state.access) {
      navigate("/signin")
    }


    console.log(window.navigator.userAgent);


    (async () => {
      let data = await getPublications(api);
      if (data.sucess) {
        setPublications(data.result);
        setLoading(false)
      }
    })()

  }, []);

  return (
    <>
    {state.deviceOS === 'windows' ?
    <div className='homeContainer'>
    <MiniDrawer />
    <div className='switchScreen'>
      <h1>{window.navigator.userAgent}</h1>
      {loading
      ?
      <>
      <h1>nada</h1>
      </>
      :
      publications.map((pub) => {
        return(
          <FeedCard key={pub.id} loading={false} pub={pub}/>
        )
      })
      
    }
      
    </div>
    <div className='stories-layout'>
        <StorieCard loading={true}/>
        <StorieCard loading={true}/>
    </div>
  </div>

  : 
  <HomeScreenMobile/>
  }
    
    </>
    
  );
}