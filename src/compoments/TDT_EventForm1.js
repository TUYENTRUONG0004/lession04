import React, { Component } from 'react'
import App from '../App'

class TDT_EventForm1 extends Component {

  eventHandleClick1 = () => {
    alert("event handle 1");
}
eventHandleClick1 = () => {
    alert("event handle 1");
}
  render() {
    return (
      <div className='alert alert-danger'>
        <h1>event hanhdle</h1>
        <button onClick={this.eventHandleClick1}>click1</button>
    <button onClick={this.eventHandleClick2}>click2</button>
    </div>
    )
  }
}
export default TDT_EventForm1;