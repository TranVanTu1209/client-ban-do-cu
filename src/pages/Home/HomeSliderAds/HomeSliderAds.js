import React, { useState } from 'react';
import classes from './HomeSliderAds.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HomeAds = () => {
  const [imgSliders] = useState([
    {
      id: '1',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/79/62/c3/f0182b8ee5ff20e9839c7d247b69a4e0.jpg'
    },
    {
      id: '2',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/91/96/8e/23f00a1822dd11c7119c75feb1e462c5.jpg'
    },
    {
      id: '3',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/f6/b6/9a/e029c41f180c9d81c823c7b97139fd15.jpg'
    },
    {
      id: '4',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/2e/9e/6c/9b61afd122c6a7cde882da94e9b39a7e.jpg'
    },
    {
      id: '5',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/04/88/19/6704194c24c8cb1ad24982bc5f975753.jpg'
    },
    {
      id: '6',
      image: 'https://salt.tikicdn.com/cache/w584/ts/banner/1b/20/80/fddc7d3ddab831c9655f4daf79405ade.png'
    }
  ])
  const imgSlidersMarkup = imgSliders.map(imgItem => <div key={imgItem.id}> <img src={imgItem.image} alt="Ads Slider" /> </div>);
  return (
    <div className={classes.HomeAds}>
      <Slider {...settings}>
        {imgSlidersMarkup}
      </Slider>
    </div>
  )
}

export default HomeAds;
