import React, { useState } from 'react';
import classes from './BannerRow.module.css';

const BannerRow = () => {
  const [imgAds] = useState([
    'https://salt.tikicdn.com/cache/w295/ts/banner/b0/87/1a/41ee660bb5806838a247e7bea40e9d7b.png',
    'https://salt.tikicdn.com/cache/w295/ts/banner/f1/38/c3/2fa61bae9ff24b2ad09984cbbaa9269b.png',
    'https://salt.tikicdn.com/cache/w295/ts/banner/40/27/ae/b4bb82aecce28639ea5ff4eedfd852f2.png',
    'https://salt.tikicdn.com/cache/w295/ts/banner/16/0e/13/3c5900545a257f5f5548221b02d0d21f.png'
  ]);
  const imgAdsMarkup = imgAds.map(imgSrc => <img src={imgSrc} key={imgSrc} alt={imgSrc} />);
  return (
    <div className={classes.BannerRow}>
      { imgAdsMarkup}
    </div>
  );
}

export default BannerRow;
