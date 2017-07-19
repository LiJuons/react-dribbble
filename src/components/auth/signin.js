import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleFormSubmit({ email, username, name, password }) {
    console.log(email, username, name, password);
  }

  render() {
    const { handleSubmit, fields: { email, username, name, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control"/ >
        </fieldset>
        <fieldset className="form-group">
          <label>Username</label>
          <input {...username} className="form-control"/ >
        </fieldset>
        <fieldset className="form-group">
          <label>Name</label>
          <input {...name} className="form-control"/ >
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control"/ >
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'username', 'name', 'password']
})(Signin);
