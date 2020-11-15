import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classes from './SidebarItemCategories.module.css';

const SidebarItemCategories = ({ openTab, closeTab }) => {
  return (
    <div className={classes.SidebarItemCategories} onMouseOver={openTab} onMouseLeave={closeTab}>
      <IconButton className={classes.Close} onClick={closeTab}>
        <CloseIcon />
      </IconButton>
      <h3>
        Sidebar Item Categories
      </h3>
    </div>
  );
}

export default SidebarItemCategories;
