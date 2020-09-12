import React from 'react';

import s from './wrapper.module.css';

const Wrapper = ({ children }) => <div className={s.wrapper}>{children}</div>;

export default Wrapper;
