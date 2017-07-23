import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div>
                <ul className="drop">
                  <li>First Item </li>
                  <li>Second Item </li>
                  <li>Third Item </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div id = "menu">
        <div style={{ color: '#F5F5F5' }} onMouseOver = { this.toggleMenu } onMouseLeave = { this.toggleMenu }>{this.props.name}</div>
        <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {menu}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default DropDown;
