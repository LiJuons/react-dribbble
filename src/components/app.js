import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

// This should be done with the router
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
        <div>
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
