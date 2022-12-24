import React, {Component} from 'react';

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isRunning) {
      if (prevState.isRunning !== this.state.isRunning) {
        console.log(this.state.time)
        this.intervalID = setInterval( () => {
          this.setState(prevState => ({
            time: (prevState.time + 0.01)
          }))
        }, 10)
      }
    } else {
      clearInterval(this.intervalID);
    }
  }

  onClickStart = () => {
    console.log("Klik");
    this.setState({
      isRunning: true
    })
  }

  onClickStop = () => {
    this.setState({
      isRunning: false
    })
  }

  onClickReset = () => {
    this.setState({
      time: 0
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toFixed(2)}</h1>
        <button onClick={this.onClickStart}>Start</button>
        <button onClick={this.onClickStop}>Stop</button>
        <button onClick={this.onClickReset}>Reset</button>
      </div>
    );
  }
}

export default ClockClass;