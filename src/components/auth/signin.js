import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Signin extends Component {

  componentWillMount() {
    document.body.style.backgroundColor = "#333333";
    this.props.clearError();
    this.props.headerOff();
    if (window.innerWidth<400)
      this.props.classChange();
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#252525";
    this.props.headerOn();
  }

  handleFormSubmit({ email, password }){ this.props.signinUser({ email, password }); }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="notice error">
          <h2 className="notice">We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.</h2>
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    let newClass = '';
    let superClass = '';
    let superButton = '';

    if (this.props.classN)
      newClass = this.props.classN;

    if (window.innerWidth<400) {
      superClass = 'superClass';
      superButton = 'superButton';
    }

    console.log(window.innerWidth, window.innerHeight, newClass);


    return (
      <Grid>
        {this.renderAlert()}
        <div className="container-fluid">
          <Link to="/">
            <img alt="Dribbble" className="center-block signin" src="https://cdn.dribbble.com/assets/signin/logo-hd-8360fbb4811d72778c637954850f3c3f0edc188a0b5e1db7041d2f4bb194dd49.png" />
          </Link>
          <Row center="xs">
            <Col xs={6} className="signinTitle">Sign In</Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Row end="xs sm md lg">
                <Col xs={12} sm={12} md={9} lg={7}>
                  <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                      <Row start="xs">
                        <Col>
                          <label className="signin">Username or Email</label>
                        </Col>
                      </Row>
                      <input  {...email} className={"form-control auth " + superClass}/ >
                      {email.touched && email.error && <div className="error">{email.error}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                      <Row start="xs">
                        <Col>
                          <label className="signin">Password <Link to='/forgot'><p className="signinForgot">Forgot?</p></Link></label>
                        </Col>
                      </Row>
                      <input type="password" {...password} className={"form-control auth " + superClass}/ >
                      {password.touched && password.error && <div className="error">{password.error}</div>}
                    </fieldset>
                    <button action="submit" className={"signin " + superButton}>Sign in</button>

                  </form>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Row start="xs sm md lg">
                <Col xs={12} sm={6} md={6} lg={6} className="signinRight">
                  <a className={"auth-twitter " + superButton} href="https://dribbble.com/auth/Twitter"> Sign in with Twitter</a>
                  <p className={"blw-twitter " + newClass}>
                    One-click sign in to Dribbble if your account is
                    connected to Twitter. We’ll walk you through
                    connecting it if it isn’t.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row center="sm md lg">
            <Col xs={4} sm={4} md={4} lg={4}>
                <hr className="vertical"/>
            </Col>
          </Row>
          <Row center="sm md lg">
            <Col xs={12} sm={4} md={4} lg={4} className="signinup">
                Not a member? <Link to="/signup"><p className="signin">Sign Up Now</p></Link>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    classN: state.ccg.classN
  };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
