import React from 'react';
import classes from './HeaderPromotionItem.module.css';

const HeaderPromotionItem = ({ Icon, title, urlPath, showNotification }) => {
  return (
    <a href={urlPath} className={classes.HeaderPromotionItem}>
      <Icon fontSize="small" />
      <span> {title} </span>
      {
        showNotification && <div className={classes.Notification}>
          Show Notification
      </div>
      }
    </a>
  )
}

export default HeaderPromotionItem;
