import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 0, seconds: 0}
  }

  onClickStart = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {minutes, seconds} = this.state
    if (seconds === 59 && minutes === 59) {
      this.setState({minutes: 0, seconds: 0})
    } else if (seconds === 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  onClickStop = () => {
    clearInterval(this.timerID)
  }

  onClickReset = () => {
    clearInterval(this.timerID)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    let min
    let sec
    if (minutes < 10) {
      min = `0${minutes}`
    } else {
      min = `${minutes}`
    }

    if (seconds < 10) {
      sec = `0${seconds}`
    } else {
      sec = `${seconds}`
    }

    return (
      <div>
        <h1>Stopwatch</h1>
        <div>
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            Timer
          </p>
          <h1>{`${min}:${sec}`}</h1>
          <button onClick={this.onClickStart}>Start</button>
          <button onClick={this.onClickStop}>Stop</button>
          <button onClick={this.onClickReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
