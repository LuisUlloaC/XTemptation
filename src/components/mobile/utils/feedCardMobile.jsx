import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import UserBadgeIcon from "../../../assets/userBadge";
import LikedIcon from "../../../assets/likedIcon";
import CommentIcon from "../../../assets/commentIcon";
import Donate from "../../../assets/donateIcon";

export default function FeedCardMobile({ loading, pub }) {

  return (
    <>
      {loading ?
        <div className="storie">
          <div className="card-image">
            <div className="title pulsate">
              <UserBadgeIcon/>
            </div>
            <div className="storie-content">
              <div className="content-title pulsate" />
              <div className="content-subtitle pulsate" />
              <div className="footer">
                <div className="circle pulsate" />
              </div>
            </div>
          </div>
        </div> :
        <div className="feed">
          <div className="header">
          <div className="circle pulsate">
          <UserBadgeIcon/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>

          <div className="title">{pub.title}</div>
          <div className="content-title">{pub.content}</div>
          </div>
          </div>
          <div className="card-image">
            <CardMedia
              className="inner"
              component="video"
              controls
              image={pub.video}
            />
          </div>
          <div className="content">
            <div className="actions"> 
            <LikedIcon/>
            <CommentIcon/>
            <Donate/>
            </div>
          </div>
            <div className="footer">
              <span>{pub.likes} Minha gostosa</span>
            </div>
        </div>

      }
    </>

  );
}
