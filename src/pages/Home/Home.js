import React from 'react';
import Sidebar from '../../components/shared/Sidebar/Sidebar';
import BannerRow from './BannerRow/BannerRow';
import classes from './Home.module.css';
import HomeHotPriceProducts from './HomeHotPriceProducts/HomeHotPriceProducts';
import HomeAds from './HomeSliderAds/HomeSliderAds';
import SuitableCategories from './SuitableCategories/SuitableCategories';
import EmailPromotion from '../../components/shared/EmailPromotion/EmailPromotion';
import HomeRightAds from './HomeRightAds/HomeRightAds';

const Home = () => {
  return (
    <div className={classes.Home}>
      <section className={classes.HomeTop}>
        <Sidebar />
        <div className={classes.HomeAdsContainer}>
          <HomeAds />
          <div className={classes.RightAds}>
            <HomeRightAds />
          </div>
        </div>
      </section>
      <BannerRow />
      <HomeHotPriceProducts />
      <SuitableCategories />
      <EmailPromotion />
    </div>
  );
}

export default Home;
