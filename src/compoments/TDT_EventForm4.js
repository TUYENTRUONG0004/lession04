import React, { Component } from 'react'
import App from '../App'

class TDT_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"dinh tuyen"
        }
    }
    handChangeName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>lay du lieu props</h2>
        <button onClick={this.handChangeName} >lay ten </button>
        <h2>wellcom to , {this.state.name}</h2>
      </div>
    )
  };
}
export default TDT_EventForm4;