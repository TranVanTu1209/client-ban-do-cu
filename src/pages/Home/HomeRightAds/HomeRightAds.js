import React, { useState } from 'react';
import classes from './HomeRightAds.module.css';

const HomeRightAds = () => {
  const [ads] = useState([
    'https://salt.tikicdn.com/cache/w206/ts/banner/cb/23/ef/986b1deed12c4c902d037d99b0e3f9b1.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/eb/27/f0/97de46156e015a82ba32963e4317b4b5.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/fa/be/11/4e19d5f9ad91b2a2288978f0c68c2451.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/d0/34/93/288bfe976ab9f5e2c48725ddf1b33d2e.jpg'
  ]);

  const adsMarkup = ads.map(ad => <img key={ad} src={ad} alt="Ads" />);

  return (
    <div className={classes.HomeRightAds}>
      { adsMarkup}
    </div>
  );
}

export default HomeRightAds;
