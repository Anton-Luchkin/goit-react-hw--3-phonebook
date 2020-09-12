import React, { Component } from 'react';

import s from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.hendleSubmit} className={s.contact_form}>
        <label className={s.lable}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            className={s.input}
          />
        </label>
        <label className={s.lable}>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handleChange}
            name="number"
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
