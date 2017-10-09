import React, {Component} from 'react';

// Components
import {Player} from './video/Player';
import {Content} from './video/Content';

export class Video extends Component {
  render() {
    let track = this.props.track;
    if (track === undefined) return false;

    return (
      <div className="video col-md-8">
        <Player track={track}/>
        <Content track={track}/>
      </div>
    );
  }
}
