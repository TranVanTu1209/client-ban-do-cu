import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classes from './SidebarItemCategories.module.css';

const SidebarItemCategories = () => {
  return (
    <div className={classes.SidebarItemCategories}>
      <IconButton className={classes.Close} >
        <CloseIcon />
      </IconButton>
      <h3>
        Sidebar Item Categories
      </h3>
    </div>
  );
}

export default SidebarItemCategories;
