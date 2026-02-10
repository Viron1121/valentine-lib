import "./Video.css";
import { useEffect, useRef } from "react";

function Video({ onEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    
    <div className="video-container">
      <video
        className="valentine-video"
        src="/valentine.mp4"
        autoPlay
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        onPause={(e) => e.target.play()} // extra evil 😈
        onEnded={onEnd}
      />
    </div>
  );
}

export default Video;
