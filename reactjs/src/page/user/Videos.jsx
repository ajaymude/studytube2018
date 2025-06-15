import React, { useState } from "react";
import Player from "./Player";
import VideoCard from "../../component/VideoCard";

const Videos = () => {
  const videoList = [
    {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
     {
      youtubeId: "QwTZCzfuqEQ",
      title: "Amazing JavaScript Tricks",
      channel: "CodeMaster",
    },
    {
      youtubeId: "ScMzIvxBSi4",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },
    {
      youtubeId: "cLKCDaNRHW0",
      title: "React Tutorial for Beginners",
      channel: "CodeWithAjay",
    },

    
    

  ];

  return (
    <div className="flex flex-col items-center mt-20 mr-4 ml-4 mb-4">

      {/* Video Cards */}
      <div className="grid grid-cols-4 gap-4 w-full">
        {videoList.map((video, idx) => (
          <div
            key={idx}
        
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
