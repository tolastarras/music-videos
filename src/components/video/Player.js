import React from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

export const Player = ({track}) => (
  <YouTube videoId={track.id} opts={opts}/>
);
