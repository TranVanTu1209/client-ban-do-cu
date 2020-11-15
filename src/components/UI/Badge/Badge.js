import React from 'react';
import classes from './Badge.module.css';

const Badge = ({ text, type }) => {
  return (
    <div className={[classes.Badge, classes[type]].join(' ')}>
      {text}
    </div>
  );
}

export default Badge;
