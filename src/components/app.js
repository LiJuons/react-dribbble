import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

class App extends Component {
  componentWillMount() {
    document.body.style.backgroundImage = "url('./../pics/horizon.jpg')";
    document.body.style.backgroundSize = "1366px 638px";
  }

  componentDidMount() {
    document.body.style.backgroundColor = null;
  }

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
