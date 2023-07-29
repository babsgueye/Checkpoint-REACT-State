
import './App.css';
import { Component } from 'react';
import React from 'react';

class App extends Component {
  state = {
    fullname: "Babacar Gueye",
    bio:"bio",
    imgSrc:"file:///C:/Users/Babacar/Downloads/(1)%20WhatsApp_files/178958688_3246554168956512_4778945830404144453_n.jpg",
    profession: "Enseignant",
  };
   handleClick = () => this.setState(
    {
      fullname: "Babacar Gueye"},
      {bio:"bio"},
      {imgSrc:"file:///C:/Users/Babacar/Downloads/(1)%20WhatsApp_files/178958688_3246554168956512_4778945830404144453_n.jpg"},
      {profession: "Enseignant"},
    
    );
  render () {
    return (
      <>
      <this.setState/>
      <button onClick = {this.handleClick}>Click Me</button>
      </>
    );
    };
}
    
export default App;
