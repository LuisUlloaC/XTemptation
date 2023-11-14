import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import colors from '../../colors';


export default function StorieCard({loading}) {
  if (loading) {
    return (
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
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-image">
          waos
          <div className="block pulsate"></div>
        </div>
        <div className="card-content">
          <div className="block3 pulsate"></div>
          <div className="block2 pulsate"></div>
          <div className="circle pulsate"></div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  }
}