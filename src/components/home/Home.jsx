import * as React from 'react';
import MiniDrawer from '../utils/drawer';
import FeedCard from '../utils/feedCard';
import StoriesAvatars from '../utils/createStorie';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import { getPublications } from '../../actions/pubs';
import HomeScreenMobile from '../mobile/homeMobile';
import Storie from '../utils/storieAvatar';


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
      {loading
      ?
      <>
      <h1>nada</h1>
      </>
      :
      <>
      <div style={{display: 'flex', height: '12%',width: '100%', paddingLeft: '2%'}}>
        <Storie loading={true}/>
      </div>
      {publications.map((pub) => {
        return(
          <FeedCard key={pub.id} loading={false} pub={pub}/>
          )
        })}
      </>
      }
    </div>
    <div className='stories-layout'>
      <h1>Here comes the news</h1>
    </div>
  </div>

  : 
  <HomeScreenMobile/>
  }
    
    </>
    
  );
}