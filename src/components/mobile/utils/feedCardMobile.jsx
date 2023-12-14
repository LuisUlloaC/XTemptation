import * as React from "react";
import colors from "../../../colors";
import RoundedChat from "../../../assets/news/roundedChatIcon";
import HeartIcon from "../../../assets/news/heartIcon";
import SendIcon from "../../../assets/news/sendIcon";
import UserIcon from "../../../assets/news/newUserIcon";
import ReactPlayer from 'react-player';

export default function FeedCardMobile({ pub }) {

  return (
    <div style={{
      display: 'flex', position: 'relative',
      flexDirection: 'column', width: '95%',
      height: '80%', margin: '1%'
    }}>
      <div style={{ display: 'flex', padding: '0.5%', marginBottom: '0.5%' }} >
        <div style={{ display: 'flex', marginRight: '1%' }}>
          <UserIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span >{pub.title}</span>
          <span style={{ color: colors.feed_darker_purple }}>{pub.content}</span>
        </div>
      </div>
      <div >
      <ReactPlayer
          height="100%"
          width="100%"
          url={pub.video}
          controls
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
