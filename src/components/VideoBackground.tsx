const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
      >
        <source
          src="/background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay absolute inset-0" />
    </div>
  );
};

export default VideoBackground;
