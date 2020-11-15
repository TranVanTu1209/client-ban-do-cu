import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.css';

const Logo = ({ color }) => {
  return (
    <Link style={{ color: color }} className={classes.Logo} to="/">
      King Shop
    </Link>
  )
}

export default Logo;
