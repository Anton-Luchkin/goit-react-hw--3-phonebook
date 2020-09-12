import React from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact/Contact';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(({ id, ...props }) => {
        return (
          <li key={id} className={s.contact}>
            <Contact onDeleteContact={() => onDeleteContact(id)} {...props} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
