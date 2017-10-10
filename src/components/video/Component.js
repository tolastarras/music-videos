import React from 'react';
import _ from 'lodash';

// Components
import {Player} from './Player';
import {Content} from './Content';

export const Video = ({track}) => {
  if (_.isEmpty(track)) return false;

  console.log(track);

  return (
    <div className="video col-md-8">
      <Player track={track}/>
      <Content track={track}/>
    </div>
  );
}
