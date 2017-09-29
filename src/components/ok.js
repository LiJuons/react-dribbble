import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../actions';
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
      <Grid style={{"margin-left":"20%"}}>
        {this.renderAlert()}
        <div className="container-fluid">
          <Link to="/">
            <img alt="Dribbble" className="center-block signin1" src="https://cdn.dribbble.com/assets/signin/logo-hd-8360fbb4811d72778c637954850f3c3f0edc188a0b5e1db7041d2f4bb194dd49.png" />
          </Link>
          <Row center="xs">
            <Col className="signinTitle1">Sign In</Col>
          </Row>
          <Row>
            <Col>
              <Row end="xs sm md lg">
                <Col className="colStyle1">
                  <form className="formStyle1" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                      <Row start="xs">
                        <Col>
                          <label className="signin1">Username or Email</label>
                        </Col>
                      </Row>
                      <input  {...email} className="form-control auth1"/ >
                      {email.touched && email.error && <div className="error1">{email.error}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                      <Row start="xs">
                        <Col>
                          <label className="signin1">Password <Link to='/forgot'><p className="signinForgot1">Forgot?</p></Link></label>
                        </Col>
                      </Row>
                      <input type="password" {...password} className="form-control auth1"/ >
                      {password.touched && password.error && <div className="error">{password.error}</div>}
                    </fieldset>
                    <button action="submit" className={"signin1 " + superButton}>Sign in</button>

                  </form>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row start="xs sm md lg">
                <Col className="signinRight1">
                  <a className={"auth-twitter1 " + superButton} href="https://dribbble.com/auth/Twitter"> Sign in with Twitter</a>
                  <p className={"blw-twitter1 " + newClass}>
                    One-click sign in to Dribbble if your account is
                    connected to Twitter. We’ll walk you through
                    connecting it if it isn’t.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row center="sm md lg">
            <Col>
                <hr className="vertical1"/>
            </Col>
          </Row>
          <Row center="sm md lg">
            <Col className="signinup1">
                Not a member? <Link to="/signup"><p className="signin1">Sign Up Now</p></Link>
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
