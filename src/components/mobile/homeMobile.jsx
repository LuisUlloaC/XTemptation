import * as React from 'react';
import './styles/home.css';
import FeedCard from '../utils/feedCard';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import BottomDrawer from './utils/bottomNavMobile';
import { getPublications } from '../../actions/pubs';
import NavBarMobile from './utils/navBarMobile';
import FeedCardMobile from './utils/feedCardMobile';


export default function HomeScreenMobile() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const { state, setState, api } = React.useContext(Context);
  const [publications, setPublications] = React.useState([]);

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
  }, [api, loading]);

  return (
      <div className='container-mobile'>
      <NavBarMobile/>
        <BottomDrawer/>
      <div className='switchScreen-mobile'>
        {loading
        ?
        <>
        <h1> No hay nada mejo</h1>
        </>
        :
        publications.map((pub) => {
          return(
            <FeedCardMobile key={pub.id} pub={pub}/>
            )
        })
        
      }
      </div>
    </div>
  );
}