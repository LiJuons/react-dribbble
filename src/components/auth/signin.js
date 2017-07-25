import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signin extends Component {
  componentWillMount() {
    this.props.clearError();
    this.props.headerOff();
  }

  componentWillUnmount() {
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
        <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label className="signin">Username or Email</label>
            <input {...email} className="form-control auth"/ >
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label className="signin">Password <Link to='/forgot'><p className="signin">Forgot?</p></Link></label>
            <input type="password" {...password} className="form-control auth"/ >
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary signin">Sign in</button>
          <div className="signUp">Not a member? <Link to="/signup"><p className="signin">Sign Up Now</p></Link></div>
        </form>
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
