import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import VideoJS from "./VidePlayer";
import UserIcon from "../../assets/news/newUserIcon";
import HeartIcon from "../../assets/news/heartIcon";
import RoundedChat from "../../assets/news/roundedChatIcon";
import SendIcon from "../../assets/news/sendIcon";

export default function FeedCard({ pub }) {
  const VideoJSMemo = React.memo(VideoJS)

  const getVideoOption = (arg) => {
    return {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      width: '100%',
      height: '100%',
      audioOnlyMode: arg.audioOnly,
      sources: [{
        src: arg.src,
        type: arg.mime
      }]
    }

  }


  return (
        <div className="feed">
          <div className="header">
          <div className="circle pulsate">
          <UserIcon/>
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
            <HeartIcon/>
            <RoundedChat/>
            <SendIcon/>
            </div>
          </div>
            <div className="footer">
              <span>{pub.likes} Minha gostosa</span>
            </div>
        </div>

  );
}

// https://codepen.io/alex_kusminov/pen/PQBdgx
