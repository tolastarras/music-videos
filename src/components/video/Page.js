import React, {Component} from 'react';

// Components
import {Player} from './Player';
import {Content} from './Content';

export const Video = ({track}) => {
  if (track === undefined) return false;

  return (
    <div className="video col-md-8">
      <Player track={track}/>
      <Content track={track}/>
    </div>
  );
}
