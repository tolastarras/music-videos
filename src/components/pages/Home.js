import React, {Component} from 'react';
import axios from 'axios';

import constants from '../../constants';

// components
import {PlayList} from '../PlayList';
import {Video} from '../video/Page';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      tracks: []
    }
  }

  componentWillMount() {
    this.tracks();
  }

  render() {
    return (
      <div>
        <Video track={this.state.tracks[0]}/>
        <PlayList tracks={this.state.tracks}/>
      </div>
    );
  }

  tracks() {
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
        let track = {
          id: item.id,
          info: item.snippet,
          statistics: item.statistics
        }
        tracks.push(track);
      })
      this.setState({tracks});
    })
    .catch(error => {
      console.log(error);
    })
  }
}
