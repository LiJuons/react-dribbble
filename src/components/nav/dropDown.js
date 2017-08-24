import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

// If you import Component, then extends Component also you can export on default
class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this); // es6, toggleMenu = () => {}
    this.state = {
      menuActive: false
    };
  }

  /*
  // If you want you can do as the following:
  // const { menuActive } = !this.state
  // this.setState({ menuActive }); 
  */
  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

   // maybe styled components with changing color?
  onEnter () {
    styles.drop_menu = {
      color: '#F5F5F5',
      fontSize: 15,
    }
  }

  // maybe styled components with changing color?
  onLeave () {
    styles.drop_menu = {
      color: '#999',
      fontSize: 15,
    }
  }

  render() {
    let menu;
    if(this.state.menuActive) { // ternary operator
      menu = <div  onMouseLeave = { this.toggleMenu }
      style={{ position: 'absolute', whiteSpace: 'nowrap', width: 'auto' }}> // styled components
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
      <div style={{ position: 'relative' }}> // styled components
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

// styled components
const styles = {
  drop_menu: {
    color: '#999',
    fontSize: 15,
  }
}
