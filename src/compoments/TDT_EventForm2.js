import React, { Component } from 'react';

export default class TDT_EventForm2 extends Component {
  eventHandleClick1 = (content) => {
    console.log('=========================');
    console.log(content);
    console.log('=========================');
  };

  render() {
    return (
      <div className='alert alert-success'>
        <h2>event demo - function component</h2>
        <button onClick={() => this.eventHandleClick1("truong dinh tuyen")}>
          goi khi render
        </button>
        <button onClick={() => this.eventHandleClick1("lession04")}>
          goi khi click
        </button>
      </div>
    );
  }
}