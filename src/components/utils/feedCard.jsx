import * as React from "react";
import UserIcon from "../../assets/news/newUserIcon";
import HeartIcon from "../../assets/news/heartIcon";
import RoundedChat from "../../assets/news/roundedChatIcon";
import SendIcon from "../../assets/news/sendIcon";
import ReactPlayer from 'react-player';
import {Context} from '../context/provider'
import { likePublication } from "../../actions/pubs";

export default function FeedCard({ pub }) {
  console.log(pub)
  const { state, api } = React.useContext(Context);
  const [likedPub, setLikedPub] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    for (let p of pub.people_who_liked) {
      if (p === state.user_id) {
        setLikedPub(true);
      }
    }
    setLoading(false)
  }, [loading])

  return (
    <div className="feed" style={{ display: 'flex', height: 'fit-content' }}>
      <div className="header">
        <div className="circle ">
          <UserIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="title">{pub.title}</div>
          <div className="content-title">{pub.content}</div>
        </div>
      </div>
      <div className="card-image">
        <ReactPlayer
        height="fit-content"
        width="fit-content"
          url={pub.video}
          controls
        />

      </div>
      <div className="content">
        <div className="actions">
          <div onClick={(async () =>{let req = await likePublication(api, pub.id); if(req.sucess){likedPub?setLikedPub(false):setLikedPub(true)}})}>
          <HeartIcon fillColor={likedPub? '#F00':'FFFFFF'}/>
          </div>
          <RoundedChat />
          <SendIcon />
        </div>
      </div>
      <div className="footer">
        <span>{pub.likes} Minha gostosa</span>
      </div>
    </div>

  );
}

// https://codepen.io/alex_kusminov/pen/PQBdgx
