import * as React from "react";

export default function FeedCard({ loading, pub }) {
    return (
      <>
      {loading ? 
      <div className="storie">
      <div className="card-image">
        <div className="title pulsate"></div>
        <div className="storie-content">
          <div className="content-title pulsate" />
          <div className="content-subtitle pulsate" />
          <div className="footer">
            <div className="circle pulsate" />
          </div>
        </div>
      </div>
    </div> :
    <div className="storie">
    <div className="card-image">
      <video src={pub.video}></video>
      <div className="title pulsate"></div>
      <div className="storie-content">
        <div className="content-title pulsate" />
        <div className="content-subtitle pulsate" />
        <div className="footer">
          <div className="circle pulsate" />
        </div>
      </div>
    </div>
  </div>
      }
      </>
      
    );
}

// https://codepen.io/alex_kusminov/pen/PQBdgx
