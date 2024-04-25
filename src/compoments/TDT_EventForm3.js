import React, { Component } from 'react'
import App from '../App'

class TDT_EventForm3 extends Component {
   constructor(props) {
    super(props);
    this.state ={
        name:"Truong Dinh Tuyen",
        job:"Dev soft",
    }
   }
   handleChangeName = ()=>{
    this.setState(
        {
            name:"lession04",
        }
    )
   }
   handleChangeJob =()=>{
    this.setState({
        job:"cong nghe thong tin",
    })
   }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>thay doi du lieu trong state</h2>
        <p> du lieu :{this.state.name}  - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay doi ten</button>
        <button onClick={this.handleChangeJob}>Thay doi job</button>
      </div>

    )
  }
}
export default TDT_EventForm3;