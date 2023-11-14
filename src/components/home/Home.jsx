import * as React from 'react';
import MiniDrawer from '../utils/drawer';
import FeedCard from '../utils/feedCard';
import StorieCard from '../utils/storiesCard';



export default function HomeScreen() {
  const [loading, setLoading] = React.useState(true);
  const [currentScreen, setCurrentScreen] = React.useState('home')

  return (
    <div className='homeContainer'>
      <MiniDrawer />
      <div className='switchScreen'>
      </div>
      <div className='stories-layout'>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
          <StorieCard loading={true}/>
      </div>
    </div>
  );
}