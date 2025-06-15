import React from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { videoId } = useParams();

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="mb-10 w-full flex justify-center">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {/* You can add title/channel here if you want (from a lookup or context) */}
    </div>
  );
};

export default Player;
