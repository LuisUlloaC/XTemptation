import * as React from 'react';


export default function FeedCard({loading}) {
  return (
    <div className='card'>
      <div className='card-image'>
        <div className='block pulsate'></div>
      </div>
    <div className="card-content">
        <div className="block3 pulsate">
        </div>
        <div className="block2 pulsate">
        </div>
        <div className="circle pulsate">
        </div>
        <div style={{clear: 'both'}}></div>
    </div>
    </div>
  );
}

// https://codepen.io/alex_kusminov/pen/PQBdgx