import React from 'react';
import classes from './Alert.module.css';

const Alert = ({ alert: { message, type } }) => {
  return (
    <p className={[classes.Alert, classes[type]].join(' ')}>
      {
        message
      }
    </p>
  );
}

export default Alert;
