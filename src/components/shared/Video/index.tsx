import React, { FC } from "react";

interface VideoProps {
  videoSrc: string;
  controls?: boolean;
}
const Video: FC<VideoProps> = ({ videoSrc, controls }) => {
  return (
    <video controls={controls != undefined ? controls : false} autoPlay muted loop className="h-full object-fill"  >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default Video;
