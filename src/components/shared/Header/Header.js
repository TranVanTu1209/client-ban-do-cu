import React from 'react';
import classes from './Header.module.css';
import MainHeader from './MainHeader/MainHeader';

const Header = () => {
  return (
    <div className={classes.Header}>
      <MainHeader />
    </div>
  );
}

export default Header;
