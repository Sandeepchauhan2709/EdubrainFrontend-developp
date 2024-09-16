
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export interface VideoPlayerHandle {
  loadVideo: (url: string) => void;
  playVideo: () => void;
}

interface VideoPlayerProps {
  initialUrl: string;
  onEnded?: () => void; 
}

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(({ initialUrl ,onEnded}, ref) => {
const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    loadVideo(url: string) {
      if (videoRef.current) {
        videoRef.current.src = url;
        videoRef.current.load();
      }
    },
    playVideo() {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }));

  return (
    <video ref={videoRef}  controls onEnded={onEnded}>
      <source src={initialUrl} type="video/mp4" />
    </video>
  );
});
VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
