import React from 'react';
import PropTypes from 'prop-types';

import s from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.delContactBtn}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
