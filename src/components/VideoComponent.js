import { useParams } from "react-router-dom";
import HeaderComponent from "./Header";
import SuggestedVideo from "./SuggestedVideo";
import "./VideoComponent.css";
import { useState } from "react";

const VideoPage = () => {
  const params = useParams();
  const id = params.id;

  const [like, setLikes] = useState(500);

  function onLiked() {
    if(isLiked == "true") {
      localStorage.setItem(id + "_liked", false);
      setIsLiked("false");
    } else{
      localStorage.setItem(id + "_liked", true);
      setIsLiked("true");
    }
  }

  function onSubscribe() {
    if(subscribe == "true") {
      localStorage.setItem(id + "_subscribe", false);
      setSubscribed("false");
    } else{
      localStorage.setItem(id + "_subscribe", true);
      setSubscribed("true");
    }
  }

  const [isLiked, setIsLiked] = useState(localStorage.getItem(id + "_liked"));
  const [subscribe, setSubscribed] = useState(localStorage.getItem(id + "_subscribe"));


  return (
    <div className="wrapper-video">
      <HeaderComponent />
      <div className="main-video">
        <div className="videoWrapper">
          <iframe
            src={"https://www.youtube.com/embed/qUzpCqXZIYw?si=RYRdi7dXcKEJAh3j"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
          <div className="title-video">Fastest Android EVER vs iPhone!</div>
          <div className="channelWrapper">
            <div className="channel-video">
              <img
                src={
                  "https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s176-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
              <div className="channelInfo">
                <div>MrWhosTheBoss</div>
                <div>2.3M Subscribers</div>
              </div>
              <button className={subscribe == "true" ? "subchannelButton": "channelButton"
              } onClick={onSubscribe}>Subscribe</button>
            </div>
            <div className="likesWrappper">
              <button className={isLiked == "true" ? "LikedchannelButtonLite": "channelButtonLite"
              } onClick={onLiked}>Like</button>
              <button className="channelButtonLite">Dislike</button>
              <button className="channelButtonLite">Share</button>
            </div>
          </div>
          <div className="description">This is description</div>
        </div>
        <div className="suggestions">
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
