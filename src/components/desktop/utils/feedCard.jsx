import * as React from "react";
import UserIcon from "../../../assets/news/newUserIcon";
import HeartIcon from "../../../assets/news/heartIcon";
import RoundedChat from "../../../assets/news/roundedChatIcon";
import SendIcon from "../../../assets/news/sendIcon";
import ReactPlayer from 'react-player';
import { Context } from '../../context/provider'
import { likePublication } from "../../../actions/pubs";

export default function FeedCard({ pub }) {
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
  }, [loading, pub.people_who_liked, state.user_id])

  return (
    <div className="feed" style={{ display: 'flex', height: 'fit-content', width: '100%' }}>
      <div className="header">
        <div className="circle ">
          <UserIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="title">{pub.title}</div>
        </div>
      </div>
      <div className="card-image">
        <ReactPlayer
          height="100%"
          width="100%"
          url={pub.video}
          controls
        />

      </div>
      <div className="content">
        <div className="actions">
          <div onClick={(async () => { let req = await likePublication(api, pub.id); if (req.sucess) { likedPub ? setLikedPub(false) : setLikedPub(true) } })}>
            <HeartIcon fillColor={likedPub ? '#F00' : 'FFFFFF'} />
          </div>
          <RoundedChat />
          <SendIcon />
        </div>
      </div>
      <div className="footer">
        <span style={{ display: pub.likes > 0 ? 'flex' : 'none' }}>{pub.likes} Minha gostosa</span>
        <div className="content-title">{pub.content}</div>
      </div>
    </div>

  );
}

