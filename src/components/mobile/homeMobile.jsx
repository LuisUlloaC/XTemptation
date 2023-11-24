import * as React from 'react';
import './styles/home.css';
import FeedCard from '../utils/feedCard';
import StorieCard from '../utils/storiesCard';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import BottomDrawer from './utils/bottomNavMobile';
import { getPublications } from '../../actions/pubs';
import NavBar from '../utils/navBar';


export default function HomeScreenMobile() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const { state, setState, api } = React.useContext(Context);
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

  }, []);

  return (
    <div className='container'>
      <NavBar/>
      <div className='switchScreen'>
        {loading
        ?
        <>
        <FeedCard loading={true}/>
        </>
        :
        publications.map((pub) => {
            <FeedCard key={pub.id} loading={false} pub={pub}/>
        })
        
      }
      </div>
      <BottomDrawer/>
    </div>
  );
}