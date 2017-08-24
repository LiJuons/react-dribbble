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

  onEnter () {
    styles.drop_menu = {
      color: '#F5F5F5',
      fontSize: 15,
    }
  }

  onLeave () {
    styles.drop_menu = {
      color: '#999',
      fontSize: 15,
    }
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div  onMouseLeave = { this.toggleMenu } style={{ position: 'absolute', whiteSpace: 'nowrap', width: 'auto' }}>
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
      <div style={{ position: 'relative' }}>
      <div id = "menu">
        <div style={styles.drop_menu} onMouseEnter={ this.onEnter } onMouseOver = { this.toggleMenu } onMouseOut = { this.onLeave } onMouseLeave = { this.toggleMenu } >{this.props.name}</div>
        <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={20} transitionLeaveTimeout={100}>
          {menu}
        </ReactCSSTransitionGroup>
      </div>
      </div>
    )
  }
}

export default DropDown;

const styles = {
  drop_menu: {
    color: '#999',
    fontSize: 15,
  }
}
