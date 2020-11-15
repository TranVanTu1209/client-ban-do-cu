import React from 'react';
import loader from '../../../assets/spinner.gif';
import classes from './ImgLoader.module.css';

const ImgLoader = () => {
  return <img className={classes.ImgLoader} src={loader} alt="loader" />
}

export default ImgLoader;
