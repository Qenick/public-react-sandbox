//VideoPlayer - Codecademy - React Project (codecademy solution)

import React from 'react';
import { Video2 } from './Video2';
import { Menu2 } from './Menu2';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class VideoPlayer2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    })
  }

  render() {
    return (
      <div>
        <h1>Video Player2</h1>
        <Menu2 chooseVideo={this.chooseVideo}/>
        <Video2 src={this.state.src}/>
      </div>
    );
  }
}

export default VideoPlayer2;