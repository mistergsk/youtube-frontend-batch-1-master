import { Link } from 'react-router-dom';
function VideoPreviewComponent(props) {
  const id = props.id;
  return (
    <div className="video">
      <div className="thumbnail">
        <Link to={'/video'}>
          <img
            alt="thumbnail"
            src={"https://i.ytimg.com/vi/qUzpCqXZIYw/hq720.jpg"}
            className="thumbnailImage"
          />
        </Link>

      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img
            alt="channelImage"
            src={
              "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj"
            }
            className="channelImage"
          />
        </div>
        <div className="title">
        Fastest Android EVER vs iPhone!|By MrWhosTheBoss
          <div className="channel">MrWhosTheBoss</div>
          <div className="views">1.5M Views . 18 Hours Ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewComponent;
