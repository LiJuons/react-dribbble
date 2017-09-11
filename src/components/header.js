import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

let verticalMenu='';

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.state = {isMoreToggleOn: false};

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  toggleMore() {
    this.setState(prevState => ({
      isMoreToggleOn: !prevState.isMoreToggleOn,
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state.isMoreToggleOn ? 'showMore' : 'hideMore');
  }

  render() {

    return (
      <div className="containerNav">
        <div>
          <div className="logoDiv">
          <Link to="/" className="navbar-brand hoverlink">
            <img alt="dribbble" className="logo" src={"../pics/dribbble_logo.png"} />
          </Link>
          </div>

          <div className="toggleNav"><a href="#" className="toggleMenu" onClick={this.toggleMenu}/></div>

          <div className={this.state.isToggleOn ? 'showMenu' : 'hideMenu'}>
            <div className={"toggleNav vertical-menu "}>
                <input className="search2" type="text" placeholder="Search " />
              <Link to='#'>Shots</Link>
              <Link to='#'>Designers</Link>
              <Link to='#'>Blog</Link>
              <Link to='#'>Podcast</Link>
              <Link to='#'>Meetups</Link>
              <Link to='#'>Jobs</Link>
              <Link to='#'>Hiring</Link>
              <Link to='#' className="moreArrow" onClick={this.toggleMore}>More</Link>
            </div>
          </div>

          <div className={this.state.isMoreToggleOn ? 'showMore' : 'hideMore'}>
            <div className="toggleNav moreMenu">
              <Link to='#' onClick={this.toggleMore}><p className="moreLink">More</p></Link>
              <Link to='#'>About</Link>
              <Link to='#'>Shop</Link>
              <Link to='#'>Support</Link>
              <Link to='#' className="separate">Places</Link>
              <Link to='#' className="separate">Buckets</Link>
              <Link to='#'>Colors</Link>
              <Link to='#' className="separate">Integrations</Link>
            </div>
          </div>

          <div className="navLeftDiv">
            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/ok'><p className="navParLeft">Shots</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Popular</Link>
                <Link to='#'>Recent</Link>
                <Link to='#'>Debuts</Link>
                <Link to='#'>Teams</Link>
                <Link to='#'>Playoffs</Link>
                <hr className="dropHr"/>
                <Link to='#'>Highlights</Link>
                <Link to='#'>Projects</Link>
                <Link to='#'>Goods by Designers</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Designers</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Designers only</Link>
                <Link to='#'>Design Teams only</Link>
                <hr className="dropHr"/>
                <Link to='#'>Add Your Design Team</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Blog</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Latest Stories</Link>
                <hr className="dropHr"/>
                <Link to='#'>Shot Block: Back to School</Link>
                <Link to='#'>Timeout: Piotr Rybacki</Link>
                <Link to='#'>Weekly Replay: Aug 28</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Podcast</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Latest Episodes</Link>
                <hr className="dropHr"/>
                <Link to='#'>Episode 20: Alice Lee</Link>
                <Link to='#'>Episode 19: Ryan Putnam</Link>
                <Link to='#'>Episode 18: Jared Erondu</Link>
                <hr className="dropHr"/>
                <Link to='#'>Listen in iTunes</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Meetups</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Dribbble Meetups</Link>
                <hr className="dropHr"/>
                <Link to='#'>Host a Meetup</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Jobs</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>All</Link>
                <Link to='#'>Remote / Anywhere</Link>
                <Link to='#'>Teams Hiring</Link>
                <hr className="dropHr"/>
                <Link to='#'>Post a Job</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft">Hiring</p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>Hiring at Dribbble</Link>
                <hr className="dropHr"/>
                <Link to='#'>Post a Job</Link>
                <Link to='#'>Scout Designers</Link>
                <Link to='#'>Add Your Desing Team</Link>
                <Link to='#'>Post a Project on Crew</Link>
              </div>
            </div>

            <div className="dropdownNav">
              <button className="dropbtnNav"><Link to='/shots'><p className="navParLeft"><span className="triDot">More</span></p></Link></button>
              <div className="dropdown-contentNav">
                <Link to='#'>About</Link>
                <Link to='#'>Shop</Link>
                <Link to='#'>Support</Link>
                <hr className="dropHr"/>
                <Link to='#'>Places</Link>
                <hr className="dropHr"/>
                <Link to='#'>Buckets</Link>
                <Link to='#'>Colors</Link>
                <hr className="dropHr"/>
                <Link to='#'>Integrations</Link>
              </div>
            </div>
          </div>

        </div>

        <div className="navRightDiv">
          <Link to="/signup"><p className="navParRight hideSup">Sign Up</p></Link>
          <Link to="/signin"><p className="navParRight showSign">Sign In</p></Link>
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
