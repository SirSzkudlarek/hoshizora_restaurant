import React, { useRef, useState } from 'react';
import food from '../../assets/food_video.mp4';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="hoshizora__video">
      <video src={food} ref={vidRef} type="video/mp4" loop controls={false} muted />
      <div
        className="hoshizora__video-overlay flex_center"
        style={playVideo ? { background: 'rgba(0, 0, 0, 0.3)' } : { background: 'rgba(0, 0, 0, 0.65)' }}
      >
        <div className="hoshizora__video-overlay_circle flex_center" onClick={handleVideo}>
          {playVideo ? <BsPauseFill color="#ecc96b" fontSize={30} /> : <BsFillPlayFill color="#ecc96b" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
