import React from 'react';

import '../styles/card.css';

export const Card = ({track}) => {
  let [artist, title] = track.info.title.split(' - ');

  return (
    <a href="/song">
      <div className="card">
          <div className="card-image">
            <img src={track.info.thumbnails.default.url} alt='artistName'/>
          </div>
          <div className="card-info">
            <h6>{title}</h6>
            <p>{artist}</p>
            <span><span className="glyphicon glyphicon-headphones" aria-hidden="true"></span> {Number(track.statistics.viewCount).toLocaleString('en')} views</span>
          </div>
      </div>
    </a>
  );
};
