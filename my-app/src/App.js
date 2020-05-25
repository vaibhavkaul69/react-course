import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return [
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>,
         <Person name="Vaibhav" age="20">Hobbies are racing</Person>,
         <Person name="Pawan" age="22">
           <ul>
             <li>banana</li>
             <li>apple</li>
             <li>orange</li>
           </ul>
           </Person>,
         <Person name="Rohit" age="30"/>
    ];
   // return React.createElement('div',{className:'App'},React.createElement('header',{className:'App-header'},React.createElement('img',{src:logo,className:'App-logo',alt:logo}),React.createElement('h1',{className:'App-title'},'Welcome to React')));
  }
}

export default  App ;

