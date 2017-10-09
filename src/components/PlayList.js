import React from 'react';
import {Card} from './Card';

import '../styles/play-list.css';

export const PlayList = ({tracks}) => {
  if (tracks.length === 0) return false;

  let cards = tracks.map((track, index) => {
    return (
      <Card key={index} track={track}/>
    );
  });

  return (
    <div className="col-md-4 play-list breadcrumb">
      <h6>Play List</h6>
      {cards}
    </div>
  );
}
