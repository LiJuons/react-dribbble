import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signin extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#333333";
    this.props.clearError();
    this.props.headerOff();
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
    this.props.headerOn();
  }

  handleFormSubmit({ email, password }){ this.props.signinUser({ email, password }); }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div>
        <Link to="/">
          <img alt="Dribbble" className="center-block signin" src="https://cdn.dribbble.com/assets/signin/logo-hd-8360fbb4811d72778c637954850f3c3f0edc188a0b5e1db7041d2f4bb194dd49.png" />
        </Link>
        <div className="text-center signinTitle">Sign in</div>
        <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary signin">Sign in</button>
          <div className="center-block signinup">Not a member? <Link to="/signup"><p className="signin">Sign Up Now</p></Link></div>
        </form>
        <div style={{ position: 'relative' }}>
          <hr className="vertical"/>
          <a className="auth-twitter" href="https://dribbble.com/auth/Twitter"> Sign in with Twitter</a>
          <p className="blw-twitter">
            One-click sign in to Dribbble if your account is<br/>
            connected to Twitter. We’ll walk you through<br/>
            connecting it if it isn’t.<br/>
          </p>
        </div>
      </div>
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
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
