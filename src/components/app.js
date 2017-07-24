import React, { Component } from 'react';
import Header from './header';
import DropDown from './nav/dropDown'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <DropDown />
        <div style={{ backgroundImage: 'url(../pics/elefant.jpg)', backgroundSize: '20px 20px' }}>
          <p>hola</p>
        </div>
      </div>
    );
  }
}
