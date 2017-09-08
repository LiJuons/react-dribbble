import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header2 extends Component {
  render() {
    return (
      <div className="containerNav">
        <div>

          <Link to="/" className="navbar-brand">
            <img alt="dribbble" className="logo" src={"../pics/dribbble_logo.png"} />
          </Link>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Shots</a></button>
            <div className="dropdown-contentNav">
              <a href="#" className="dropLinkA">Popular</a>
              <a href="#">Recent</a>
              <a href="#">Debuts</a>
              <a href="#">Teams</a>
              <a href="#">Playoffs</a>
              <hr className="dropHr"/>
              <a href="#">Highlights</a>
              <a href="#">Projects</a>
              <a href="#">Goods by Designers</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Designers</a></button>
            <div className="dropdown-contentNav">
              <a href="#">Designers only</a>
              <a href="#">Design Teams only</a>
              <hr className="dropHr"/>
              <a href="#">Add Your Design Team</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Blog</a></button>
            <div className="dropdown-contentNav">
              <a href="#">Latest Stories</a>
              <hr className="dropHr"/>
              <a href="#">Shot Block: Back to School</a>
              <a href="#">Timeout: Piotr Rybacki</a>
              <a href="#">Weekly Replay: Aug 28</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Podcast</a></button>
            <div className="dropdown-contentNav">
              <a href="#">Latest Episodes</a>
              <hr className="dropHr"/>
              <a href="#">Episode 20: Alice Lee</a>
              <a href="#">Episode 19: Ryan Putnam</a>
              <a href="#">Episode 18: Jared Erondu</a>
              <hr className="dropHr"/>
              <a href="#">Listen in iTunes</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Meetups</a></button>
            <div className="dropdown-contentNav">
              <a href="#">Dribbble Meetups</a>
              <hr className="dropHr"/>
              <a href="#">Host a Meetup</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Jobs</a></button>
            <div className="dropdown-contentNav">
              <a href="#">All</a>
              <a href="#">Remote / Anywhere</a>
              <a href="#">Teams Hiring</a>
              <hr className="dropHr"/>
              <a href="#">Post a Job</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA">Hiring</a></button>
            <div className="dropdown-contentNav">
              <a href="#">Hiring at Dribbble</a>
              <hr className="dropHr"/>
              <a href="#">Post a Job</a>
              <a href="#">Scout Designers</a>
              <a href="#">Add Your Desing Team</a>
              <a href="#">Post a Project on Crew</a>
            </div>
          </div>

          <div className="dropdownNav">
            <button className="dropbtnNav"><a href="/shots" className="navlinkA"><span className="triDot">More</span></a></button>
            <div className="dropdown-contentNav">
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Support</a>
              <hr className="dropHr"/>
              <a href="#">Places</a>
              <hr className="dropHr"/>
              <a href="#">Buckets</a>
              <a href="#">Colors</a>
              <hr className="dropHr"/>
              <a href="#">Integrations</a>
            </div>
          </div>

        </div>

        <div className="navRightDiv">
          <Link to="/signup"><p className="navPar">Sign Up</p></Link>
          <Link to="/signin"><p className="navPar">Sign In</p></Link>
          <input className="search" type="search" ref="city" placeholder="Search"/>
        </div>

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
