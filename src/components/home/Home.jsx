import * as React from 'react';
import MiniDrawer from '../utils/drawer';
import FeedCard from '../utils/feedCard';



export default function HomeScreen() {
  const [loading, setLoading] = React.useState(true);
  const [currentScreen, setCurrentScreen] = React.useState('home')

  return (
    <div className='homeContainer'>
      <MiniDrawer />
      <div className='switchScreen'>
        <FeedCard loading={true}/>

      </div>
    </div>
  );
}