import React from 'react';
import classes from './Banner.module.css';

const Banner = ({ bannerSrc, bannerTitle, destinationUrl }) => {
  return (
    <a className={classes.Banner} href={destinationUrl} target="_blank" rel="noopener noreferrer" >
      <img src={bannerSrc} alt={bannerTitle} className={classes.BannerImage} />
    </a>
  )
}

export default Banner;
