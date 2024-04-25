import React, { Component } from 'react'
import TDT_EventForm1 from './compoments/TDT_EventForm1';
import TDT_EventForm2 from './compoments/TDT_EventForm2';
import TDT_EventForm3 from './compoments/TDT_EventForm3';
import TDT_EventForm4 from './compoments/TDT_EventForm4';

 class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>event form demo</h1>
        <TDT_EventForm1 />
        <TDT_EventForm2 />
        <TDT_EventForm3 />
        <TDT_EventForm4 name="truong dinh tuyen" />
        </div>
    )
  }
}
export default App;