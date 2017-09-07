import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header2 extends Component {
  render() {
    const links = ['Shots', 'Designers', 'Blog', 'Podcast', 'Meetups', 'Jobs', '...'];
    const listItems = links.map((link_name) =>
      <li className="nav-item" key={link_name}>
        <p className="parNav">{link_name}</p>
      </li>
    );
    return (
      <div className="containerNav">
        <div>
          <Link to="/" className="navbar-brand">
            <img alt="dribbble" className="logo" src={"../pics/dribbble_logo.png"} />
          </Link>
          <ul>
            <li className="nav-item" key={2}>
              <Link className="nav-link" to="/signup"><p className="parNav">Sign Up</p></Link>
            </li>
            {listItems}
          </ul>
          <a href="#news">News</a>
        </div>
        <div className="dropdownNav">
          <button className="dropbtnNav">Dropdown</button>
          <div className="dropdown-contentNav">
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
