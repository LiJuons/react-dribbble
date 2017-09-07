import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header2 extends Component {
  render() {
    return (
      <div className="containerNav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#news">Link</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header2);
