import React, { useState } from "react";
import VideoCard from "../../component/VideoCard";
import Player from "./Player";

const Videos = () => {
const videoList = [
  { youtubeId: "dQw4w9WgXcQ", title: "Famous Video 1", channel: "Channel 1" },
  { youtubeId: "kJQP7kiw5Fk", title: "Famous Video 2", channel: "Channel 2" },
  { youtubeId: "kffacxfA7G4", title: "Famous Video 3", channel: "Channel 3" },
  { youtubeId: "JGwWNGJdvx8", title: "Famous Video 4", channel: "Channel 4" },
  { youtubeId: "OPf0YbXqDm0", title: "Famous Video 5", channel: "Channel 5" },
  { youtubeId: "9bZkp7q19f0", title: "Famous Video 6", channel: "Channel 6" },
  { youtubeId: "fRh_vgS2dFE", title: "Famous Video 7", channel: "Channel 7" },
  { youtubeId: "09R8_2nJtjg", title: "Famous Video 8", channel: "Channel 8" },
  { youtubeId: "CevxZvSJLk8", title: "Famous Video 9", channel: "Channel 9" },
  { youtubeId: "hT_nvWreIhg", title: "Famous Video 10", channel: "Channel 10" },
  { youtubeId: "lp-EO5I60KA", title: "Famous Video 11", channel: "Channel 11" },
  { youtubeId: "0KSOMA3QBU0", title: "Famous Video 12", channel: "Channel 12" },
  { youtubeId: "PT2_F-1esPk", title: "Famous Video 13", channel: "Channel 13" },
  { youtubeId: "RPJkL1mK7G8", title: "Famous Video 14", channel: "Channel 14" },
  { youtubeId: "PMivT7MJ41M", title: "Famous Video 15", channel: "Channel 15" },
  { youtubeId: "YqeW9_5kURI", title: "Famous Video 16", channel: "Channel 16" },
  { youtubeId: "60ItHLz5WEA", title: "Famous Video 17", channel: "Channel 17" },
  { youtubeId: "YQHsXMglC9A", title: "Famous Video 18", channel: "Channel 18" },
  { youtubeId: "nfWlot6h_JM", title: "Famous Video 19", channel: "Channel 19" },
  { youtubeId: "RgKAFK5djSk", title: "Famous Video 20", channel: "Channel 20" },
  { youtubeId: "6Ejga4kJUts", title: "Famous Video 21", channel: "Channel 21" },
  { youtubeId: "5L6xyaeiV58", title: "Famous Video 22", channel: "Channel 22" },
  { youtubeId: "YlUKcNNmywk", title: "Famous Video 23", channel: "Channel 23" },
  { youtubeId: "k2qgadSvNyU", title: "Famous Video 24", channel: "Channel 24" },
  { youtubeId: "1wYNFfgrXTI", title: "Famous Video 25", channel: "Channel 25" },
  { youtubeId: "aJOTlE1K90k", title: "Famous Video 26", channel: "Channel 26" },
  { youtubeId: "2Vv-BfVoq4g", title: "Famous Video 27", channel: "Channel 27" },
  { youtubeId: "pXRviuL6vMY", title: "Famous Video 28", channel: "Channel 28" },
  { youtubeId: "K0ibBPhiaG0", title: "Famous Video 29", channel: "Channel 29" },
  { youtubeId: "1G4isv_Fylg", title: "Famous Video 30", channel: "Channel 30" },
  { youtubeId: "a-xWhG4UU_Y", title: "Famous Video 31", channel: "Channel 31" },
  { youtubeId: "oRdxUFDoQe0", title: "Famous Video 32", channel: "Channel 32" },
  { youtubeId: "UceaB4D0jpo", title: "Famous Video 33", channel: "Channel 33" },
  { youtubeId: "3tmd-ClpJxA", title: "Famous Video 34", channel: "Channel 34" },
  { youtubeId: "4NRXx6U8ABQ", title: "Famous Video 35", channel: "Channel 35" },
  { youtubeId: "fJ9rUzIMcZQ", title: "Famous Video 36", channel: "Channel 36" },
  { youtubeId: "FtutLA63Cp8", title: "Famous Video 37", channel: "Channel 37" },
  { youtubeId: "Zi_XLOBDo_Y", title: "Famous Video 38", channel: "Channel 38" },
  { youtubeId: "hLQl3WQQoQ0", title: "Famous Video 39", channel: "Channel 39" },
  { youtubeId: "kXYiU_JCYtU", title: "Famous Video 40", channel: "Channel 40" },
  { youtubeId: "eY52Zsg-KVI", title: "Famous Video 41", channel: "Channel 41" },
  { youtubeId: "3JWTaaS7LdU", title: "Famous Video 42", channel: "Channel 42" },
  { youtubeId: "LsoLEjrDogU", title: "Famous Video 43", channel: "Channel 43" },
  { youtubeId: "M11SvDTbdY", title: "Famous Video 44", channel: "Channel 44" },
  { youtubeId: "u9Dg-g7t2l4", title: "Famous Video 45", channel: "Channel 45" },
  { youtubeId: "JyG1mWm6jLM", title: "Famous Video 46", channel: "Channel 46" },
  { youtubeId: "3AtDnEC4zak", title: "Famous Video 47", channel: "Channel 47" },
  { youtubeId: "UDBdC1_E2gQ", title: "Famous Video 48", channel: "Channel 48" },
  { youtubeId: "jtD8uDngvho", title: "Famous Video 49", channel: "Channel 49" },
  { youtubeId: "fLexgOxsZu0", title: "Famous Video 50", channel: "Channel 50" },
  { youtubeId: "QJO3ROT-A4E", title: "Famous Video 51", channel: "Channel 51" },
  { youtubeId: "PfmoBgf9QB0", title: "Famous Video 52", channel: "Channel 52" },
  { youtubeId: "kTlv5_Bs8aw", title: "Famous Video 53", channel: "Channel 53" },
  { youtubeId: "C_oUAE7wTwc", title: "Famous Video 54", channel: "Channel 54" }
];


  return (
    <div className="flex flex-col items-center mt-20 mr-4 ml-4 mb-4">

      {/* Video Cards */}
      <div className="grid grid-cols-4 gap-4 w-full">
        {videoList.map((video, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedVideo(video)}
            className="cursor-pointer"
          >
            <VideoCard {...video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
