import React from 'react';
import spinner from '../../../assets/spinner.gif';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <img src={spinner} alt="Spinner loading" />
    </div>
  );
}

export default Spinner;
