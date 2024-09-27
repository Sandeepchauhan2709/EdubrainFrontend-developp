import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react'

export interface VideoPlayerHandle {
  loadVideo: (url: string) => void
  playVideo: () => void
}

interface VideoPlayerProps {
  initialUrl: string
  onEnded?: () => void
  onProgressUpdate: (progress: number) => void
}

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  ({ initialUrl, onEnded, onProgressUpdate }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [, setProgress] = useState(0)

    useImperativeHandle(ref, () => ({
      loadVideo(url: string) {
        if (videoRef.current) {
          videoRef.current.src = url
          videoRef.current.load()
        }
      },
      playVideo() {
        if (videoRef.current) {
          videoRef.current.play()
        }
      },
    }))

    useEffect(() => {
      const video = videoRef.current
      if (!video) return

      const handleTimeUpdate = (): void => {
        const currentProgress = (video.currentTime / video.duration) * 100
        setProgress(currentProgress)
        onProgressUpdate(currentProgress)
      }

      video.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }, [onEnded, onProgressUpdate])

    return (
      <video
        ref={videoRef}
        controls
        onEnded={onEnded}
        style={{ width: '100%', height: 'auto' }}
      >
        <source src={initialUrl} type="video/mp4" />
      </video>
    )
  }
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
