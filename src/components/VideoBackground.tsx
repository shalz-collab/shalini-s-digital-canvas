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
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay absolute inset-0" />
    </div>
  );
};

export default VideoBackground;
