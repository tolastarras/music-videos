import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

// components
import {Navbar} from './Navbar';
import {PlayList} from './PlayList';
import {Video} from './Video';
import {Home} from './Home';
// import {NotFound} from './NotFound';

// modules
// import Tracks from '../modules/Tracks';
import constants from '../constants';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

class App extends Component {
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
      <div className="App">
        <Router>
          <Switch>
            <Navbar/>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
        <div className="container main-content">
          <Video track={this.state.tracks[0]}/>
          <PlayList tracks={this.state.tracks}/>
        </div>
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
      // console.log(tracks);
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export default App;
