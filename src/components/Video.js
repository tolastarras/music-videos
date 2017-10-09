import React, {Component} from 'react';
import YouTube from 'react-youtube';
import moment from 'moment';
// import PropTypes from 'prop-types';

import '../styles/video.css';

export class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    let track = this.props.track;
    if (track === undefined) return false;

    let descriptionClass = 'description';
    let btnText = 'Show More';
    if (this.state.show) {
      descriptionClass += '-all';
      btnText = 'Show Less'
    }

    const opts = {
      height: '390',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="video col-md-8">
        <YouTube videoId={track.id} opts={opts} onReady={this._onReady}/>
        <div className="breadcrumb title">
          <h3>{track.info.title}</h3>
        </div>
        <div className="breadcrumb">
          <div className={descriptionClass}>
            <h5>Published on {this._formatDate(track.info.publishedAt)}</h5>
            <p>{track.info.description}</p>
          </div>
          <button onClick={this._toggleDescription.bind(this)}>{btnText}</button>
        </div>
      </div>
    );
  }

  _formatDate(str) {
    // let date = moment(str);
    return moment(str).utc().format('MMM DD, YYYY');
  }

  _toggleDescription() {
    this.setState({show: !this.state.show})

    if (this.state.show) {
      document.querySelector('.description-all').scrollTop = 0;
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

Video.propTypes = {
  // data: PropTypes.obj
}
