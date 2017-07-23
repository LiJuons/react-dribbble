import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DropDown from './nav/dropDown'

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated){
      return <li className="nav-item">
          <Link className="nav-link" to="/signout"><p style={styles.style_link}>Sign Out</p></Link>
        </li>
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin"><p style={styles.style_link}>Sign In</p></Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup"><p style={styles.style_link}>Sign Up</p></Link>
        </li>
      ];
    }
  }

  render() {
    const links = ['Shots', 'Designers', 'Blog', 'Podcast', 'Meetups', 'Jobs', '...'];
    const listItems = links.map((link_name) =>
      <li className="nav-item" key={link_name}>
        <div className="nav-link"><DropDown name={link_name} /></div>
      </li>
    );
    return (
      <nav className="navbar-light" style={{ backgroundColor: '#333333' }}>
        <div>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img alt="dribbble" style={styles.style_img} src={"http://www.underconsideration.com/brandnew/archives/dribbble_logo_detail.png"} />
            </Link>
          <ul className="nav navbar-nav" style={styles.style_l}>
            {listItems}
          </ul>
        </div>
          <ul className="nav navbar-nav style_r" style={styles.style_r}>
            {this.renderLinks()}
            <li className="nav-item" key={10}>
              <input type="search" ref="city" placeholder="Search"/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);

const styles = {
  style_r: {
    margin: 10,
    top: 5,
    right: 17,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  style_link: {
    color: '#F5F5F5',
    fontSize: 15,
  },
  style_drop: {
    color: '#F5F5F5',
    fontSize: 32,
  },
  style_l: {
    margin: 5,
    top: 10,
    left: 134,
    bottom: 20,
    position: 'absolute',
  },
  style_img: {
    margin: 5,
    left: 10,
    width: 100,
    height: 42,
  }
};
