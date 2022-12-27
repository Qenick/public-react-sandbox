//VideoPlayer - Codecademy - React Project (my solution)

import React from 'react';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };

  }

  handleChange = (e) => {
    const src = VIDEOS[e.target.value];
    this.setState({
      src
    })
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu handleChange={this.handleChange}/>
        <Video source={this.state.src}/>
      </div>
    );
  }
}

export default VideoPlayer
