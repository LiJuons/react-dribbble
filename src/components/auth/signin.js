import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

// The header logic should be done with a router
// Router changes => RC
class Signin extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#333333"; // RC
    this.props.clearError(); // RC
    this.props.headerOff();  // RC
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null; // RC
    this.props.headerOn(); // RC
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

    // If splitting everything maybe you will be possible to reuse some of the components 
    return (
      <div>
        <div className="errorContainer">
          {this.renderAlert()}
        </div>
        <div className="container-fluid">
          <Link to="/">
            <img alt="Dribbble" className="center-block signin" src="https://cdn.dribbble.com/assets/signin/logo-hd-8360fbb4811d72778c637954850f3c3f0edc188a0b5e1db7041d2f4bb194dd49.png" />
          </Link>
          <div className="col-6"> </div> // grid 
          <div className="signinTitle text-center">Sign in</div>
          <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> // es6 binding
            <fieldset className="form-group">
              <label className="signin">Username or Email</label>
              <input  {...email} className="form-control auth"/ >
              {email.touched && email.error && <div className="error">{email.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label className="signin">Password <Link to='/forgot'><p className="signin">Forgot?</p></Link></label>
              <input type="password" {...password} className="form-control auth"/ >
              {password.touched && password.error && <div className="error">{password.error}</div>}
            </fieldset>
            <button action="submit" className="signin">Sign in</button>
            <div className="center-block signinup">Not a member? <Link to="/signup"><p className="signin">Sign Up Now</p></Link></div>
          </form>
          <div style={{ position: 'relative' }}> // styled components
            <hr className="vertical"/>
            <a className="auth-twitter" href="https://dribbble.com/auth/Twitter"> Sign in with Twitter</a>
            <p className="blw-twitter">
              One-click sign in to Dribbble if your account is<br/>
              connected to Twitter. We’ll walk you through<br/>
              connecting it if it isn’t.<br/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  // maybe loop?
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

// do es6
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
