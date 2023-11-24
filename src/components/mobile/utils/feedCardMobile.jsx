import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import VideoJS from "../../utils/VidePlayer";
import UserBadgeIcon from "../../../assets/userBadge";
import LikedIcon from "../../../assets/likedIcon";
import CommentIcon from "../../../assets/commentIcon";
import Donate from "../../../assets/donateIcon";
import colors from "../../../colors";
import RoundedChat from "../../../assets/news/roundedChatIcon";
import HeartIcon from "../../../assets/news/heartIcon";
import SendIcon from "../../../assets/news/sendIcon";

export default function FeedCardMobile({ pub }) {

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

  const videoOptions = React.useMemo(() => {
    //getVideoOption()
  })


  return (
    <div style={{
      display: 'flex', position: 'relative',
      flexDirection: 'column', width: '95%',
      height: '80%', margin: '1%'
    }}>
      <div style={{ display: 'flex', padding: '0.5%', marginBottom: '0.5%' }} >
        <div style={{ display: 'flex', marginRight: '1%' }}>
          <UserBadgeIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span >{pub.title}</span>
          <span style={{ color: colors.feed_darker_purple }}>{pub.content}</span>
        </div>
      </div>
      <div >
        <CardMedia
          className="inner"
          component="video"
          controls
          image={pub.video}
        />
      </div>
      <div style={{ display: 'flex', width: '30%', justifyContent: 'space-between', alignItems: 'center', marginTop: '1%' }}>
        <HeartIcon />
        <RoundedChat />
        <SendIcon />
      </div>
      <div style={{display: 'flex', margin: '1.5%'}}>
        <span>{pub.likes} Minha gostosa</span>
      </div>
    </div>
  );
}
