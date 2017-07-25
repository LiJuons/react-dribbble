import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

class App extends Component {
  render() {
    console.log(this.props.header);
    if (this.props.header) {
      return (
        <div>
          <Header />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className="signin">
          {this.props.children}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    header: state.hdr.header
  };
}

export default connect(mapStateToProps)(App);
