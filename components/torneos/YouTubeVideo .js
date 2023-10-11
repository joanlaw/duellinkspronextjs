// YouTubeVideo.js
import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
    const opts = {
        width: '100%',  // Establecer el ancho al 100% para que sea responsivo
        playerVars: {
          autoplay: 0,
        },
      };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
