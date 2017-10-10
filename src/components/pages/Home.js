import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string';

import constants from '../../constants';

// components
import {PlayList} from '../playlist/Component';
import {Video} from '../video/Component';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      track: {},
      tracks: []
    }
  }

  componentWillMount() {
    this._tracks();
  }

  render() {
    return (
      <div>
        <Video track={this.state.track}/>
        <PlayList tracks={this.state.tracks}/>
      </div>
    );
  }

  _track(tracks) {
    const parsed = queryString.parse(window.location.search);

    // default to playing the first video in the playlist
    if (parsed.v === undefined) return tracks[0];

    // find the selected video in the playlist array
    let track = tracks.find(item => {
      return item.id === parsed.v;
    })

    return track;
  }

  _tracks() {
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        chart: 'mostPopular',
        regionCode: 'US',
        part: 'snippet,contentDetails,statistics',
        maxResults: 10,
        videoCategoryId: constants.YOUTUBE_VIDEO_CATEGORY_ID,
        key: constants.API_KEY_YOUTUBE
      }
    })
    .then(response => {
      let tracks = []
      response.data.items.forEach(item => {
        tracks.push(item);
      })

      this.setState({
        track: this._track(tracks),
        tracks
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
}
