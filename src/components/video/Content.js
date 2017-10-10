import React, {Component} from 'react';
import moment from 'moment';
// import nano from 'nanoscroller';
// import PropTypes from 'prop-types';

import '../../styles/video-content.css';

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    let video = this.props.track;
    let track = video.snippet;
    let descriptionClass = 'nano-content description';
    let btnText = 'Show More';
    if (this.state.show) {
      descriptionClass += '-all';
      btnText = 'Show Less'
    }

    return (
      <div className="content">
        <div className="breadcrumb title">
          <div className="row title">
            <div className="col-md-9">
              <h3>{track.title}</h3>
            </div>
            <div className="col-md-3 text-right view-count">
              <h3>{Number(video.statistics.viewCount).toLocaleString('en')} views</h3>
            </div>
          </div>
        </div>
        <div className="breadcrumb nano">
          <div className={descriptionClass}>
            <h5>Published on {this._formatDate(track.publishedAt)}</h5>
            <p>{track.description}</p>
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
}

Content.propTypes = {
  // data: PropTypes.obj
}
