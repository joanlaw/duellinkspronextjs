// YouTubeVideo.js
import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="relative pt-56.25% overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"  // Aquí se añade la clase de Tailwind para eliminar el borde
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
