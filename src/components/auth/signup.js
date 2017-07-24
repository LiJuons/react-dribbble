import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  componentWillMount() {
    this.props.clearError();
  }

  handleFormSubmit(formProps){ this.props.signupUser(formProps); }

  constructor(props) {
    super(props);
    this.state = {value: 'USERNAME'};
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="aler alert-danger">
          <strong>Oops! </strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const {
      handleSubmit,
      fields: { email, username, name, password, passwordConfirm }
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control auth" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Username:</label>
          <input type="text" className="form-control auth" {...username}
            value={this.state.value} onChange={this.handleChange.bind(this)}
            />
          <p className="sub_label">Your Dribbble URL: https://dribbble.com/<strong style={{color:'#777'}}>{this.state.value}</strong></p>
          {username.touched && username.error && <div className="error">{username.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Name:</label>
          <input className="form-control auth" {...name} />
          <p className='sub_label'>We're big on real names around here, so people know who's who</p>
          {name.touched && name.error && <div className="error">{name.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control auth" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
      </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className="form-control auth" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Create Account</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.username) {
    errors.username = 'Please enter an username';
  }

  if (!formProps.name) {
    errors.name = 'Please enter an name';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password != formProps.passwordConfirm) {
    errors.password = "Passwords must match!";
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'username', 'name', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
