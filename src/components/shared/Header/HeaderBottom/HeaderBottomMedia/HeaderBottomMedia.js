import React from 'react';
import classes from './HeaderBottomMedia.module.css';

const HeaderBottomMedia = ({ Icon, title, titleSmall, longTitle }) => {
  return (
    <div className={classes.HeaderBottomMedia}>
      <Icon /> <span style={{
        fontSize: `${titleSmall ? '13px' : ''}`,
        width: `${longTitle ? 'auto' : ''}`
      }}> {title} </span>
    </div>
  );
}

export default HeaderBottomMedia;
